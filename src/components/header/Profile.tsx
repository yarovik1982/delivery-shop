import Image from "next/image";

export const Profile = () => {
   return (
				<div className="ml-6 p-2 flex flex-1 justify-end items-center gap-2.5">
					<Image
						src="/images/graphics/cat-1.png"
						alt="Аватар"
						width={40}
						height={40}
						loading="eager"
						className=" border rounded-full border-(--color-primary) min-h-10 min-w-10"
					/>
					<p className="hidden xl:block p-2 cursor-pointer">User</p>
         <button className="hidden xl:block cursor-pointer">
                 <Image src="/header-icons/icon-arrow.svg" alt="Профиль" width={24} height={24} loading="eager"/>
               </button>
				</div>
			);
}
export default Profile