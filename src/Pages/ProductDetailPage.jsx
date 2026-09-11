import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

const ProductDetailPage = () => {
    const [itemCount, setItemCount] = useState(0);
    const [product, setProduct] = useState([]);

    const {id:productId} = useParams();
    const ProductList = async () => {
        try {
            const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> ProductList, []);
    
  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8 flex items-center justify-center">
        <article className="flex bg-amber-100">
            <section className="w-full">
                <img src={product.image} alt="" className="w-full lg:w-1/3 aspect-3/4 object-cover object-center"/>
            </section>
            <section className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold">The Universe / Galaxy</h2>
                <p>description of the product description of the product description of the product</p>
                <div className="flex gap-6 items-center justify-center">
                    <button className="px-6 py-2 rounded-2xl bg-amber-400" onClick={()=>setItemCount(Math.max(0, itemCount-1))}>-</button>
                    <p>{itemCount}</p>
                    <button className="px-6 py-2 rounded-2xl bg-amber-400" onClick={()=>setItemCount(Math.min(100, itemCount+1))}>+</button>
                </div>
            </section>
        </article>
    </div>
  )
}

export default ProductDetailPage