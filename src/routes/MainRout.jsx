import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Browse from "../pages/Browse/Browse";


const route  = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Browse/>
            }
        ]
    }
])

export default route;