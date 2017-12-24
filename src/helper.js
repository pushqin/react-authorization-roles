/**
 * Created by alexgo on 12/24/2017.
 */

import {role} from './config';
export const auth = (roles) => {
    return roles.includes(role);
};