import Image from "next/image";
import Link from "next/link";

export const ViewAllButton = ({
	btnText,
	href,
	src,
}: {
	btnText: string;
	href: string;
	src: string;
}) => {
	return (
		<Link href={href} className="flex flex-row items-center gap-x-2 cursor-pointer">
			<p className="text-base text-center text-[#606060] hover:text-[#bfbfbf]">
				{btnText}
			</p>
			<Image
				src={src}
				alt={btnText}
				width={24}
				height={24}
				sizes="24px"
			/>
		</Link>
	);
};
export default ViewAllButton;
