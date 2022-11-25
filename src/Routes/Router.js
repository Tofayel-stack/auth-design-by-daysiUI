import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Pages/Categoris/Categories";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/login/Login";
import News from "../components/Pages/News/News";
import Registresion from "../components/Pages/registresion/Registresion";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/categoris/:id',
                element: <Categories></Categories>,
                loader:({params})=> fetch (`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoutes><News></News></PrivateRoutes>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/registresion',
                element: <Registresion></Registresion>

            }
            
        ]
           
        
    }, {
        path:'*',
        element: <div>404 error <br />your  site not found</div>
    },
   
]);
