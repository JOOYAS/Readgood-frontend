import { useForm } from "react-hook-form";
import ErrorMessage from "../components/errorMessage";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(`${import.meta.env.VITE_API_BASE_URL}/users`, data)
            .then((res) => {
                console.log(res);
                navigate(-1);
            })
            .catch((error) => {
                console.error("error in signup");
            });
    };
    return (
        <div className=" mx-auto my-8 lg:w-1/2 items-center min-h-screen p-8 sm:px-16 xl:px-24">
            <h1 className="text-4xl font-extrabold">Signup</h1>
            <form
                className="mt-6 h-auto flex flex-col text-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="name" className="mt-6 text-2xl">
                    Name
                </label>
                <input
                    className="p-2 border border-blue-300 rounded-lg select:bg-blue-100"
                    placeholder="Name"
                    id="name"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "name is not entered",
                        },
                        maxLength: {
                            value: 20,
                            message: "length must be within 20 letters",
                        },
                    })}
                />
                {errors.name && <ErrorMessage message={errors.name.message} />}

                <label htmlFor="email" className="mt-6 text-2xl">
                    Email
                </label>
                <input
                    className="p-2 border border-blue-300 rounded-lg"
                    placeholder="email@example.com"
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

                <label htmlFor="password" className="mt-6 text-2xl">
                    Password
                </label>
                <input
                    type="password"
                    className="p-2 border border-blue-300 rounded-lg"
                    placeholder="create a unique password"
                    id="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "password not entered",
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                            message:
                                "Password must be 8-20 characters, including an uppercase letter, lowercase letter, number, and special character",
                        },
                    })}
                />
                {errors.password && (
                    <ErrorMessage message={errors.password.message} />
                )}

                <label htmlFor="confirm_password" className="mt-6 text-2xl">
                    Confirm Password
                </label>
                <input
                    type="password"
                    className="p-2 border border-blue-300 rounded-lg"
                    placeholder="enter the same password above"
                    id="confirm_password"
                    {...register("confirm_password", {
                        required: {
                            value: true,
                            message: "re-enter the password",
                        },
                        validate: (value) =>
                            value === watch("password") ||
                            "passwords do not match",
                    })}
                />
                {errors.confirm_password && (
                    <ErrorMessage message={errors.confirm_password.message} />
                )}

                <input
                    className="py-2 bg-blue-500 hover:bg-gradient-to-r from-blue-500 via-blue-100 to-blue-500 mt-6 rounded-lg"
                    type="submit"
                    value="Signup"
                />
            </form>
        </div>
    );
};

export default Signup;
