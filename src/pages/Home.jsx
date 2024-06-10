
import {useFetch} from "../hooks/useFetch"

import ProductsLinkst from "../components/ProductsList";
import ProductsList from "../components/ProductsList";


function Home() {
  const {data, isPending, error} = useFetch("https://dummyjson.com/products");
  return (
    <div>
    {isPending && <div>Loading...</div>}
   {data && <ProductsList data={data} />}
  </div>
  )
   
}

export default Home