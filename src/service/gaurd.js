import React from 'react'
import {Navigate, useLocation} from "react-router-dom";
import ApiService from './ApiService';

export const ProtectedRoute= ({element: Componet}) =>{
    const location = useLocation;

    return ApiService.isAuthenticated()?(
        Comment
    ):(
        <Navigate to="/login" replace state={{from: location}}/>
    );
};


export const AdminRoute= ({element: Componet}) =>{
    const location = useLocation;

    return ApiService.isAdmin()?(
        Comment
    ):(
        <Navigate to="/login" replace state={{from: location}}/>
    );
};
