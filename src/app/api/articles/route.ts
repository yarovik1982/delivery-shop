import { getDb } from "../../../../utils/api-routes";
import { NextResponse } from "next/server";
export const relevated = 3600;

export async function GET() {
   try {
      const db = await getDb();
      const articles = await db.collection("articles").find().toArray();
      return NextResponse.json(articles)

   } catch (err) { 
      console.error("Ошибка сервера: ", err);
      return NextResponse.json({message:"Ошибка сервера"}, { status: 500 })

   }
 }