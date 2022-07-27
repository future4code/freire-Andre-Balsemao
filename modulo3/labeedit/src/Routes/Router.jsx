import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import PostPage from "../Pages/PostPage/PostPage";
import SignUpPage from "../Pages/SingUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />}>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};



