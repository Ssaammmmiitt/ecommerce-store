"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router =useRouter();

  const handleClick = () =>{
    router.push(`/product/${data?.id}`);
  }

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
          alt="image"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
                <IconButton
                onClick={()=>{}}
                icon={<Expand size={20} className="text-gray-600"/>}
                />
                <IconButton
                onClick={()=>{}}
                icon={<ShoppingCart size={20} className="text-gray-600"/>}
                />
            </div>
        </div>
      </div>
      {/* Product Info */}
      <div>
        <p className="text-semibold text-lg">
            {data.name}
        </p>
        <p className="text-sm text-gray-500">
            {data.category?.name}
        </p>
      </div>
        {/* Price */}
        <div className="flex items-center justify-between">
        <Currency value={data.price} />
        </div>
    </div>
  );
};

export default ProductCard;
