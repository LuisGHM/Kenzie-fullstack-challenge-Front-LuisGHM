import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { ProtectedRoutes } from "../components/ProtectRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<ProtectedRoutes/>}>
          <Route index element={<HomePage/>} /> 
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};
