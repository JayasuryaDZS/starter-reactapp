import React from "react";
import { Navigate } from 'react-router-dom'

interface AuthProtectedType {
    children?: React.ReactNode
}

const AuthProtected: React.FC<AuthProtectedType> = (props) => {
    if (!localStorage.getItem('authUser')) {
        return (
            <Navigate to={{ pathname: "/login" }}/>
        )
    }
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default AuthProtected