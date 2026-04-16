export interface ProductCardProps{
   _id?: string;
   id: number;
   img: string;
   title: string;
   description: string;
   basePrice: number;
   discountPercent?: number;
   rating: {
      rate: number;
      count: number;
   };
   weight?: string;
   volume?: string;
   categories: string[];
   quantity?: number;
}
