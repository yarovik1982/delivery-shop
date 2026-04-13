import { getDb } from "../../../../../utils/api-routes";
import { NextResponse } from "next/server";
export const relevated = 3600;

type Purchase = { id: number };
type UserDoc = { purchases?: Purchase[] };

export async function GET() {
   try {
      const db = await getDb();
      const user = await db.collection<UserDoc>("users").findOne({});
      if (!user?.purchases?.length) {
         return NextResponse.json([])
      }
      const productIds = user.purchases.map((p) => p.id);
      const products = await db
         .collection("products")
         .find({ id: { $in: productIds } }).toArray();
      return NextResponse.json(
         products.map((product) => {
            const { discountPersent, ...rest } = product;
            void discountPersent;
            return rest;
         })
      )

   } catch (err) { 
      console.error("Ошибка сервера: ", err);
      return NextResponse.json({ message:"Ошибка при купленных продуктов"}, { status: 500 })

   }
 }
