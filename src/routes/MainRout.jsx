import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Browse from "../pages/Browse/Browse";
import FromWatchList from "../pages/Browse/FromWatchList/FromWatchList";
import Popular from "../pages/Browse/Popular/Popular";
import TvShow from "../pages/Browse/TvShow/TvShow";
import WhatsComing from "../pages/Browse/WhatsComing/WhatsComing";
import Details from "../pages/Details/Details";


const route  = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Browse/>
            },
            {
                path:'/watchlist',
                element: <FromWatchList/>
            },
            {
                path: '/popular',
                element: <Popular/>
            },
            {
                path: '/tv',
                element: <TvShow/>
            },
            {
                path: '/coming-soon',
                element: <WhatsComing/>
            },
            {
                path:'/:id',
                element: <Details/>,
                // loader:()=> fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=38bb64131f6a09cb91a161b833a0f5e1`),
            }
        ]
    }
])

export default route;