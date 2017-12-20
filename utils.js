/**
 * Created by alexgo on 12/20/2017.
 */
import React from 'react';
import AuthorizationComponent from './src/components/AuthorizationRoute';

export const createAuthElement =(auth,element,props)=>{
    return React.createElement(AuthorizationComponent(auth)(element),props);
};

export const userRole = 'user';

export const AllowedRolesAdmin = ['admin'];
export const AllowedRolesUser = ['user'];
export const AllowedRolesAdminAndUser= ['admin','user'];