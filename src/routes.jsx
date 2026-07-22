import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route path="/" element={<Home />} />
            <Route path="/details/:type/:id" element={<Details />} />
        </Route>
    )
);