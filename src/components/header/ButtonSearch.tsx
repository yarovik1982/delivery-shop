import Image from "next/image";

export const ButtonSearch = () => {
	return (
		<button className="bg-(--color-primary) hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active) hidden md:flex w-10 lg:w-35 p-2 gap-5 rounded cursor-pointer duration-300">
			<Image
				src="/header-icons/icon-menu.svg"
				alt="меню"
				width={24}
				height={24}
				loading="eager"
				className="hidden md:block object-contain w-6 h-6"
			/>
			<span className="text-base text-white hidden lg:block">Каталог</span>
		</button>
	);
};
export default ButtonSearch;
