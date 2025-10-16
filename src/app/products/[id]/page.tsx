import ProductDetail from '@/components/ProductDetail';
import ProductList from '@/components/ProductList';
import { stripe } from '@/lib/stripe';
import { memo } from 'react';


const ProductPage = async({params}: {params: {id: string}}) => {

  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

    const product = await stripe.products.retrieve(params.id, {
        expand: ["default_price"]
    })
    const plainProduct = JSON.parse(JSON.stringify(product))
  return (
    <div>
    <ProductDetail product={plainProduct} />
    <div className='pb-8 mt-30'>
      <h1 className='text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-10'>Similar products you may like</h1>
      <ProductList products={products.data} hideSearch />
    </div>
    </div>
  );
};

export default memo(ProductPage);