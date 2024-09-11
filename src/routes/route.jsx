import AboutUs from "../pages/AboutUs/AboutUs";
import Home from "../pages/Home/Home";
import MediaPage from "../pages/MediaPage/MediaPage";
import OurTeam from "../pages/OurTeam/OurTeam";
import SiteRoot from "../pages/SiteRoot";
import Transport from "../pages/Transport/Transport";



export const ROUTES= [{
    path: "/",
    element: <SiteRoot/>,
    children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "transport",
            element: <Transport/>
        },
        {
            path: "/sirketimiz/komandamiz/sirketimiz",
            element: <AboutUs/>
        },
        {
            path: "/sirketimiz/komandamiz",
            element: <OurTeam/>
        },
        {
            path: "/sirketimiz/media",
            element: <MediaPage/>
        },
    ]
}]