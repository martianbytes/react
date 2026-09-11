import axios from "axios";
import { useEffect, useState } from "react"
import Card from "../Components/Card";
// import { useNavigate } from "react-router";
import AddProductForm from "../Components/SellForm";

const AllCards = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  // const [reload, setReload] = useState(false);
  // const navigate = useNavigate();
    const [products, setProducts] = useState([]);

  const getProduct = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
  }
    useEffect(()=>{
        getProduct();
    }, []);
  return (
    // <div className="flex flex-wrap gap-8 mx-10">
    //     {products.map((item) => (
    //         <Card item={item} />
    //     ))}
    // </div>
    <div>

      <button onClick={()=>{setShowAddProduct(true)}} className="px-4 py-2 bg-amber-400 rounded-4xl hover:bg-amber-200 active:scale-95 flex justify-self-end mt-4 mr-4">Add Product</button>

    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>

    {showAddProduct && <div className="fixed inset-0 bg-black/60">{<AddProductForm setShowAddProduct={setShowAddProduct} getProduct={getProduct} />}</div>}
    </div>
  )
}

export default AllCards