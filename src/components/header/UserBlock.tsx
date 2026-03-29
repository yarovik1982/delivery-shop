import TopMenu from "./TopMenu";
import Profile from "./Profile";

export const UserBlock = () => {
	return (
		<nav aria-label="Основное меню" className="py-2">
			<div className="h-14 md:h-auto fixed bottom-0 right-0 left-0 md:static flex grow justify-between items-center w-full px-4 py-2 shadow-(--shadow-default) md:shadow-none text-[8px] md:text-[12px] bg-white z-50">
				<TopMenu />
				<Profile />
			</div>
		</nav>
	);
};
export default UserBlock
