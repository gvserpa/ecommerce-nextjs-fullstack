"use client";

import { memo } from "react";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "../../store/card-store";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const router = useRouter();

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  const onBuyNow = () => {
    if (quantity === 0) {
      onAddItem();
    }

    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
          <Image
            className="transition duration-300 hover:opacity-90"
            alt={product.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-700 mb-4">{product.description}</p>
        )}
        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        <div className="flex items-center space-x-4">
          <Button onClick={() => removeItem(product.id)} variant="outline">
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem} variant="outline">
            +
          </Button>
        </div>
        <div className="flex flex-col w-1/2 mt-6 gap-2">
          <Button
            onClick={onAddItem}
            variant="outline"
            className="bg-yellow-300 hover:bg-yellow-500"
          >
            <ShoppingCart />
            Add to Cart
          </Button>
          <Button
            onClick={onBuyNow}
            variant="outline"
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            <ShoppingBag />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
