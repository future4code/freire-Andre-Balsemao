export const goToHome = (navigate) => {
  navigate("/");
};

export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToSignUp = (navigate) => {
  navigate("/cadastro");
};

export const goToPost = (navigate) => {
  navigate('/post/');
};

// export const goToPost = (navigate) => {
//   navigate(`/post/${id}`);
// };

export const goToFeed = (navigate) =>{
  navigate('/feed')
}

export const goBack = (navigate) => {
  navigate(-1);
};
