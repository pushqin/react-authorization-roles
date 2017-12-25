/**
 * Created by alexgo on 12/20/2017.
 */
import React from 'react';

export const userRole = 'user';

export const hulk = ['hulk'];
export const god = ['god',...hulk];
export const admin = ['admin',...god];
export const user = ['user',...admin];
