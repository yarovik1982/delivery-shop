import Image from "next/image";

export const SlideTwo = () => {
   return (
      <div className="relative w-full h-full">
         <Image src="/images/graphics/slide-2.jpeg" alt="Слайд 2" fill loading="eager" className="object-cover"/>
      </div>
   );
}
export default SlideTwo
