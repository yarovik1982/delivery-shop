import { getDb } from "../../../../utils/api-routes";
import { NextResponse } from "next/server";
export const relevated = 3600;
export const dinamyc = 'forse-dinamyc';

export async function GET(request:Request) {
   try {
      const category = new URL(request.url).searchParams.get("category");
      if (!category) return NextResponse.json(
         {message:"Параметр категрии обязателен"},
         {status:400}
      )
      const products = await (await getDb()).collection("products").find({categories:category}).toArray();
      return NextResponse.json(products)

   } catch (err) { 
      console.error("Ошибка сервера: ", err);
      return NextResponse.json({ message:"Ошибка при загрузке товаров"}, { status: 500 })

   }
 }