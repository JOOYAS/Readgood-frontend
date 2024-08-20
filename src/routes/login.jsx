import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/errorMessage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginState } from "../features/login/loginSlice";
import { useNavigate } from "react-router";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post(`${import.meta.env.VITE_API_BASE_URL}/auth0`, data, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data) {
                    console.log("loginpage response:", res.data);
                    dispatch(
                        changeLoginState({
                            loggedIn: true,
                            user: res.data, // Ensure this is the correct user data
                        })
                    );
                    navigate(-1); //Navigate back to the previous page
                } else {
                    console.error("No user data received on login.");
                }
            })
            .catch((error) => {
                console.error("login page error:", error);
            });
    };

    return (
        <div className=" mx-auto my-12 lg:w-1/2 items-center min-h-screen p-8 sm:px-16 xl:px-24">
            <h1 className="text-4xl font-extrabold">Login</h1>
            <form
                className="mt-8 h-auto flex flex-col text-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="email" className="mt-8 text-2xl">
                    Email
                </label>
                <input
                    className="p-2 border border-blue-300 rounded-lg "
                    placeholder="enter your email"
                    id="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "email not entered",
                        },
                        pattern: {
                            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter a valid email",
                        },
                    })}
                />
                {errors.email && (
                    <ErrorMessage message={errors.email.message} />
                )}

                <label htmlFor="password" className="mt-8 text-2xl">
                    Password
                </label>
                <input
                    type="password"
                    className="p-2 border border-blue-300 rounded-lg "
                    placeholder="Password"
                    id="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "password not entered",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                            message: "Probably this won't be your password",
                        },
                    })}
                />
                {errors.password && (
                    <ErrorMessage message={errors.password.message} />
                )}

                <input
                    className="py-2 border-2 border-blue-900 bg-blue-500 hover:bg-gradient-to-r from-blue-500 via-blue-100 to-blue-500 active:bg-white mt-8 rounded-lg"
                    type="submit"
                    value="login"
                />
            </form>
        </div>
    );
};

export default Login;
