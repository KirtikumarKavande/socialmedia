import { Route, Routes } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import SocialMedia from "../components/SocialMedia";

export default function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<SocialMedia/>}/>
            <Route path="/user/:id" element={<UserDetails/>}/>
        </Routes>
    )
}