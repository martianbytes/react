import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// import { useLocation, useNavigate } from "react-router";
import { productSchema } from "./SellForm";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"




const EditProduct = ({product, setShowEdit, setProductDetail}) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const product = location.state;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: '',
            price: '',
            description: '',
            category: '',
            image: '',
        },
    });

    useEffect(()=> {
        if(product) {
            reset({
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
            })
        }
    }, [product, reset]);

    // This function is only executed when all validations pass
    const onSubmit = async (data) => {
        console.log('Product submitted successfully:', data);

        // Optional: clear the form after successful submission
        try {

            const res = await axios.put(`https://fakestoreapi.com/products/${product.id}`, data);
            console.log('hello', res.data);
            toast.success("Product updated Successfully");
            // {res.data && navigate('/cards')}
            if (res.data) {
                
                // navigate(-1)
                setShowEdit(false);
            }

            if(setProductDetail) setProductDetail(false);
            
            reset();
        } catch (err) {
            toast.error(err.message)
            console.log("error", err)
        }
    };



    return (
        <div>
            <div className="fixed inset-0 z-50 bg-transparent flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    <button className='px-4 py-2 bg-amber-400 rounded-4xl hover:bg-amber-200 active:scale-95 flex items-center justify-self-start mt-4 ml-4' onClick={() => setShowEdit(false)}>
                        Close</button>
                    <Button variant='ghost'>Button</Button>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Edit Product</h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Fill in the details below to add a new item to your inventory.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Wireless Noise-Canceling Headphones"
                                {...register('title')}
                                className={`w-full px-3.5 py-2 rounded-lg border text-sm transition outline-none focus:ring-2 ${errors.title
                                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                    : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                                    }`}
                            />
                            {errors.title && (
                                <p className="mt-1 text-xs text-rose-500 font-medium">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        {/* Price & Category in a 2-column grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Price ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    {...register('price')}
                                    className={`w-full px-3.5 py-2 rounded-lg border text-sm transition outline-none focus:ring-2 ${errors.price
                                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                        : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                                        }`}
                                />
                                {errors.price && (
                                    <p className="mt-1 text-xs text-rose-500 font-medium">
                                        {errors.price.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Category
                                </label>
                                <select
                                    {...register('category')}
                                    className={`w-full px-3.5 py-2 rounded-lg border text-sm transition outline-none focus:ring-2 bg-white ${errors.category
                                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                        : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                                        }`}
                                >
                                    <option value="">Select category...</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="books">Books</option>
                                    <option value="home">Home & Kitchen</option>
                                </select>
                                {errors.category && (
                                    <p className="mt-1 text-xs text-rose-500 font-medium">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Image URL
                            </label>
                            <input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                {...register('image')}
                                className={`w-full px-3.5 py-2 rounded-lg border text-sm transition outline-none focus:ring-2 ${errors.image
                                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                    : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                                    }`}
                            />
                            {errors.image && (
                                <p className="mt-1 text-xs text-rose-500 font-medium">
                                    {errors.image.message}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Description
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Brief details about the product..."
                                {...register('description')}
                                className={`w-full px-3.5 py-2 rounded-lg border text-sm transition outline-none focus:ring-2 ${errors.description
                                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                    : 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-100'
                                    }`}
                            />
                            {errors.description && (
                                <p className="mt-1 text-xs text-rose-500 font-medium">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Saving...' : 'Edit product'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default EditProduct;