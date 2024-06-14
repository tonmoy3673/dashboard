import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch("https://dashboard-server-ten.vercel.app/books")
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[]);
    return (
        <div>
            <h2 className="text-center pb-4 md:pb-8 text-xl lg:text-3xl text-[#f2f2f2] font-semibold">All Books Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-y-4 lg:gap-10">

                {
                   !loading ? Array.isArray(products) &&  products.map((product)=><Product product={product}  key={product.id} products={products} setProducts={setProducts}/>) : 'loading'
                }
            </div>
         
            
        </div>
    );
};

export default AllProducts;