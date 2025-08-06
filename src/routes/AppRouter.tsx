import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import Creation from "../pages/Creation";
import Earnings from "../pages/Earnings";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        errorElement : <Error />,
        children : [
            {
            index : true,
            element : <Home />
        },
        {
            path : "explore",
            element : <Explore />
        },
        {
            path : "profile",
            element : <Profile />
        },
        {
            path : "create",
            element : <Creation />
        },
        {
            path : "earnings",
            element : <Earnings />
        }
    ]
    }
])

const AppRouter = ()=>{
    return <RouterProvider router={router} />
}
export default AppRouter;