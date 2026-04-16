import ProductCard from "@/components/ProductCard";
import { ProductCardProps } from "@/types/product";
import ViewAllButton from "@/components/ViewAllButton";

export const AllUserPurchases = async () => {
   let purchases: ProductCardProps[] = []
   let error = null
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`)
      purchases = await res.json()

   } catch (err) {
      error = "ошибка получения купленных товаров"
      console.error("Ошибка в компоненте Purchases",err)
   }
   if (error) { 
      return <div className="text-red-500">Ошибка: { error}</div>
   }
   return (
				<section>
					<div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col justify-center xl:max-w-302 mx-auto mt-20">
						<div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
							<h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
								Покупали раньше
							</h2>
							<ViewAllButton
								href="/"
								btnText="Главная"
								src="/header-icons/icon-arrow-right.svg"
							/>
						</div>
						<ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
							{purchases.map((item) => (
								<li key={item.id}>
									<ProductCard {...item} />
								</li>
							))}
						</ul>
					</div>
				</section>
			);
};
export default AllUserPurchases;
