import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";

const Router = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
);

export default Router;
