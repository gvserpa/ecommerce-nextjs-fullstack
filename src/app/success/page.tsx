"use client"

import Link from 'next/link';
import { memo, useEffect } from 'react';
import { useCartStore } from '../../../store/card-store';

const SuccessPage = () => {
    const {clearCart} = useCartStore()
    useEffect(() => {
        clearCart()
    }, [clearCart])
  return (
    <div className='container mx-auto px-4 py-8 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Payment successful!</h1>
      <p className='mb-4'>Thank you for your purchase. Your ordered is being processed.</p>
      <Link href={"/products"} className='text-blue-600 hover:underline'>Continue Shopping</Link>
    </div>
  );
};

export default memo (SuccessPage);