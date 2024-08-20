import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import Home, { loader as homeLoader } from "./routes/home";
import Authors, { loader as authorsLoader } from "./routes/authors";
import Author, { loader as authorLoader } from "./routes/author";
import Books, { loader as booksLoader } from "./routes/books";
import Book, { loader as bookLoader } from "./routes/book";
import Signup from "./routes/signup";
import store from "./app/store";
import { Provider } from "react-redux";
import Login from "./routes/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: homeLoader,
            },
            {
                path: "/books",
                element: <Books />,
                loader: booksLoader,
            },
            {
                path: "/books/:bookId",
                element: <Book />,
                loader: bookLoader,
            },
            {
                path: "/authors",
                element: <Authors />,
                loader: authorsLoader,
            },
            {
                path: "/authors/:authorId",
                element: <Author />,
                loader: authorLoader,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
