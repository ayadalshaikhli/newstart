import ExtraProductList from "../components/extrafile/ExtraProductList";
import ProductList from "../components/productfile/ProductList";
import client, { getProductsInCollection } from "../lib/shopify"

export default function Home( {products} ) {

  return (
    <div className="">
      <ProductList products={products}/>
      <ExtraProductList products={products}/>
    </div>
  )
}


export async function getStaticProps(){
  const products = await getProductsInCollection()
  return {
    props: {
      products,
   
    }
  }
}