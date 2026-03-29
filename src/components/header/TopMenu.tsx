import Image from "next/image";

export const TopMenu = () => {
	return (
		<ul className="flex flex-row gap-x-6 items-end">
			<li className="flex flex-col items-center gap-2.5 md:hidden w-11 cursor-pointer">
				<Image
					src="/header-icons/icon-menu-mob.svg"
					alt="Каталог"
					width={24}
					height={24}
					loading="eager"
					className="object-contain w-6 h-6"
				/>
				<span>Каталог</span>
			</li>
			<li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
				<Image
					src="/header-icons/icon-heart.svg"
					alt="Избранные"
					width={24}
					height={24}
					loading="eager"
					className="object-contain w-6 h-6"
				/>
				<span>Избранные</span>
			</li>
			<li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
				<Image
					src="/header-icons/icon-box.svg"
					alt="Заказы"
					width={24}
					height={24}
					loading="eager"
					className="object-contain w-6 h-6"
				/>
				<span>Заказы</span>
			</li>
			<li className="flex flex-col items-center gap-2.5 w-11 cursor-pointer">
				<Image
					src="/header-icons/icon-cart.svg"
					alt="Корзина"
					width={24}
					height={24}
					loading="eager"
					className="object-contain w-6 h-6"
				/>
				<span>Корзина</span>
			</li>
		</ul>
	);
};
export default TopMenu;
