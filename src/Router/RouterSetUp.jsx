import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Components/Layouts/MainLayout";
import Register from "../Pages/RegisterPage";
import ParyoParyoParyo from "../Components/ParyoParyoParyo";
import Scores from "../Pages/Scores";
import Products from "../Pages/Products";
import AllCards from "../Pages/AllCards";
import MouseMove from "../Components/MouseMove";
import App from "../App";
// import SellForm from "../Components/SellForm";
import AddProductForm from "../Components/SellForm";
import EditProduct from "../Components/EditProductForm";
import Delete from "../Components/Common/Delete";
import Signup from "@/Components/Common/Signup";
import TSQ from "@/Components/LearnTanStackQuery";



const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: App},
            {path: 'register', Component: Register},
            {path: 'game', Component: ParyoParyoParyo},
            {path: 'scores', Component: Scores },
            {path: 'products', Component: Products},
            {path: 'cards', Component: AllCards},
            {path: 'mousemove', Component: MouseMove},
            // {path: 'products/:id', Component: ProductDetailPage},
            {path: 'sell', Component: AddProductForm},
            {path: 'edit-product', Component: EditProduct},
            {path: 'delete-product', Component: Delete},
            {path: 'signup', Component: Signup},
            {path: 'tsq', Component: TSQ}
        ]
    }
])

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default Router;