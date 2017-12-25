/**
 * Created by alexgo on 12/20/2017.
 */
import React from 'react';
import AuthorizationComponent from './src/components/AuthorizationRoute';

export const createAuthElement =(allowedRoles,element,props)=>{
    return React.createElement(AuthorizationComponent(allowedRoles)(element),props);
};

export const user = ['user'];
export const su = ['su','user'];
export const admin = ['admin','su','user'];


const admin1 = su.concat('admin');
const admin2 = [...su,'admin'];