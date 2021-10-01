import jwt_decode from 'jwt-decode';
import { authData } from '../types/user.types';

export const decode : any = (token : string) => jwt_decode(token ?? '');