import ProductCard from "@/components/ProductCard";
import {  ProductCardProps} from "@/types/product"
import { shuffleArray } from "../../../utils/shuffleArray";
import ViewAllButton from "@/components/ViewAllButton";

export const AllNew = async () => {
   let products: ProductCardProps[] = [];
      let error = null;
   
      try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=new`);
         
         products = await res.json();
         products = shuffleArray(products);
      } catch (err) { 
         error = "Ошибка получения всех новых товаров";
         console.error("Ошибка в компоненте AllNew:",err);
      }
      if (error) {
         return <div className="text-red-500">Ошибка: { error}</div>
      }
   return (
            <section>
               <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col justify-center xl:max-w-302 mx-auto mt-20">
                  <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                     <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
                        Новинки
                     </h2>
                     <ViewAllButton
                        href="/"
                        btnText="Главная"
                        src="/header-icons/icon-arrow-right.svg"></ViewAllButton>
                  </div>
                  <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                     {products.map((item) => (
                        <li key={item._id ?? item.id}>
                           <ProductCard {...item} />
                        </li>
                     ))}
                  </ul>
               </div>
            </section>
         );
}
export default AllNew
