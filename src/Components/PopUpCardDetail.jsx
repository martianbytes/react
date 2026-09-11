import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditProduct from "./EditProductForm";
import { useState } from "react";
import Delete from "./Common/Delete";

const PopUpCardDetail = ({ setProductDetail, product }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4">
        <div className="w-full max-w-4xl max-h-[90vh] flex items-center gap-8 bg-zinc-900/90 p-6 rounded-2xl overflow-y-auto">
          
          <div className="aspect-3/4 w-1/3 shrink-0 rounded-xl overflow-hidden">
            <img 
              src={product?.image} 
              alt={product?.title || "Product image"} 
              className="w-full h-full object-contain" 
            />
          </div>

          <div className="w-2/3 space-y-5">
            <h3 className="font-semibold text-white line-clamp-1 text-4xl">{product?.title}</h3>
            <p className="text-gray-300">{product?.description}</p>
            <p className="font-semibold text-white text-xl">${product?.price}</p>
            <div className="flex gap-4">
              <button 
                className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2 rounded-2xl transition-colors cursor-pointer" 
                onClick={() => setProductDetail(false)}
              >
                Close
              </button>
              <button 
                className="flex justify-self-start p-4 bg-amber-300 hover:bg-amber-200 rounded active:scale-95 text-2xl cursor-pointer" 
                onClick={() => setShowEdit(true)}
              >
                <FaEdit />
              </button>
              <button 
                className="flex justify-self-start p-4 bg-red-600 hover:bg-red-500 rounded active:scale-95 text-2xl cursor-pointer" 
                onClick={() => setConfirmDelete(true)}
              >
                <RiDeleteBin6Fill />
              </button>
            </div>
          </div>

        </div>
      </div>

      {confirmDelete && (
        <Delete 
          setConfirmDelete={setConfirmDelete} 
          setProductDetail={setProductDetail}
          product={product} 
        />
      )}

      {showEdit && <EditProduct product={product} setShowEdit={setShowEdit} setProductDetail={setProductDetail}/>}
    </div>
  );
};

export default PopUpCardDetail;