import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlineDeleteForever } from "react-icons/md";

const Delete = ({ setConfirmDelete, setProductDetail, product }) => {
    const handleDelete = async () => {
        if (!product?.id) return;
        try {
            await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
            toast.success("Product deleted successfully!");
            setConfirmDelete(false);
            if (setProductDetail) setProductDetail(false);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center backdrop-blur-2xl">
            <div className="px-8 py-4 bg-black/60 backdrop-blur-xs rounded-xl flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center gap-2">
                    <MdOutlineDeleteForever className="text-3xl text-red-500"/>
                    <h2 className="text-white text-2xl">Are you Sure?</h2>
                </div>
                <div className="flex justify-between gap-8">
                    <button 
                        className="bg-amber-300 hover:bg-amber-200 active:scale-95 px-4 py-2 rounded-xl cursor-pointer" 
                        onClick={() => setConfirmDelete(false)}
                    >
                        Cancel
                    </button>
                    <button 
                        className="bg-red-600 hover:bg-red-500 text-white active:scale-95 px-4 py-2 rounded-xl cursor-pointer" 
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Delete;