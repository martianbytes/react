import axios from "axios";
import { useEffect } from "react"

const Products = () => {
    // const async ProductList = () => {
    //     try {
    //         const res = await fetch("https://fakestoreapi.com/Products")
            
    //         if(!res.ok) throw new Error("Http Status Code "+ res.status)
    //     }catch(e) {

    //     }
    // }

    const ProductList = async() => {
        try {
            const response = await axios.get("https://fakestoreapi.com/Products");
            
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>ProductList, [])
  return (
    <>

    </>
  )
}

export default Products