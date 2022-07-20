import ProductList from "../components/productfile/ProductList";
import client, { getProductsInCollection } from "../lib/shopify"

export default function Home( {products} ) {


  

  return (
    <div className="">
      <ProductList products={products}/>
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