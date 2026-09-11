import { useState } from "react";
import PopUpCardDetail from "./PopUpCardDetail";

const Card = ({ item }) => {
  // const [isOpen, setIsOpen] = useState({});
  // const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetail, setProductDetail] = useState(null);

  const onProductClick = (item) => {
    // setShowProductDetail(true);
    setProductDetail(item);
  }

  return (
    <>
      <article
        className="flex flex-col w-full max-w-xs overflow-hidden rounded-xl border border-slate-300 shadow-xs cursor-pointer"
        // onClick={() => setIsOpen(true)}
        onClick={()=>onProductClick(item)}
      >
        <div className="relative aspect-3/4 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain p-4 bg-white object-center transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-3 left-3 bg-white/60 backdrop-blur-md rounded-md px-2 py-1 text-xs font-semibold text-slate-800">
            {item.category}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-slate-900 mx-2 font-semibold truncate">{item.title}</h3>
          <p className="text-slate-500 mx-2 truncate">{item.description}</p>
          <div className="m-4 flex justify-between items-center border-t border-slate-100 pt-3">
            <span className="font-bold text-lg text-slate-900">${item.price}</span>
            {/* Prevent button click from toggling the main card modal */}
            <button
              className="bg-slate-900 rounded-2xl text-white text-sm px-3 py-1.5 hover:bg-slate-700"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>

      {/* Conditionally render the full-screen modal */}
      {/* {isOpen && <PopUpDetail item={item} onClose={() => setIsOpen(false)} />} */}
      {productDetail && <PopUpCardDetail setProductDetail={setProductDetail} product={productDetail}/>}
    </>
  );
};

export default Card;

// const PopUpDetail = ({ item, onClose }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
//       {/* Click outside backdrop to close */}
//       <div className="absolute inset-0" onClick={onClose} />

//       {/* Modal Content */}
//       <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] flex flex-col md:flex-row gap-6">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 text-xl font-bold p-2"
//         >
//           ✕ 
//         </button>

//         <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50 rounded-xl p-4">
//           <img src={item.image} alt={item.title} className="max-h-64 object-contain" />
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
//           <div>
//             <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
//               {item.category}
//             </span>
//             <h2 className="text-2xl font-bold text-slate-900 mt-1">{item.title}</h2>
//             <p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.description}</p>
//           </div>

//           <div className="flex items-center justify-between border-t pt-4">
//             <span className="text-2xl font-bold text-slate-900">${item.price}</span>
//             <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-slate-700 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };