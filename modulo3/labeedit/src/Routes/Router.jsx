import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import PostPage from "../Pages/PostPage/PostPage";
import SignUpPage from "../Pages/SingUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Header from "../Components/Header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="cadastro" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="*" element={<ErrorPage />}>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};



