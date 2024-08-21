import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollToTop from "../components/scrollToTop";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../features/login/loginSlice";
import { logout } from "../features/login/loginSlice";

const Root = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/auth0/verify`, {
                withCredentials: true,
            })
            .then((res) => {
                console.log("checking...................................");
                if (!res.data) {
                    dispatch(logout());
                } else {
                    const userData = res.data;
                    console.log(userData);
                    dispatch(
                        changeLoginState({
                            loggedIn: true,
                            user: userData,
                        })
                    );
                }
            })
            .catch((error) => {
                console.error("Token verification error:", error);
                dispatch(logout());
            });
    }, [dispatch]);

    return (
        <>
            <Header />
            <main className="bg-grey-50">
                <ScrollToTop />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
