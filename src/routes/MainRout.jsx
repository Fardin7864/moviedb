import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Browse from "../pages/Browse/Browse";
import FromWatchList from "../pages/Browse/FromWatchList/FromWatchList";
import Popular from "../pages/Browse/Popular/Popular";
import TvShow from "../pages/Browse/TvShow/TvShow";
import WhatsComing from "../pages/Browse/WhatsComing/WhatsComing";
import Details from "../pages/Details/Details";
import SearchReasult from "../pages/SearchReasult/SearchReasult";


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
            },
            {
                path: '/search/:string',
                element: <SearchReasult/>,
            }
        ]
    }
])

export default route;