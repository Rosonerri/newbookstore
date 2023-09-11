import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomePage from "../Pages/HomePage";
import Upload from "../Pages/Upload";


export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <Layout/>,
        children: [{
            index: true, element: <HomePage/>
        }]
    },
    {
        path: "/upload-book",
        element: <Upload/>
    }
])
