import React from "react";
import useUnProtectedPage from '../../Hooks/useUnProtectedPage'

const ErrorPage = () => {
    useUnProtectedPage()
    return(
        <div>
            <h1>
                Error Page
            </h1>
        </div>
    )
}


export default ErrorPage;