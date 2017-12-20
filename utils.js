/**
 * Created by alexgo on 12/20/2017.
 */
import React from 'react';
import AuthorizationComponent from './src/components/AuthorizationRoute';

export const createAuthElement =(allowedRoles,element,props)=>{
    return React.createElement(AuthorizationComponent(allowedRoles)(element),props);
};

export const userRole = 'admin';

export const AllowedRolesAdmin = ['admin'];
export const AllowedRolesUser = ['user'];
export const AllowedRolesAdminAndUser= ['admin','user'];