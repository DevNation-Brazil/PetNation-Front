import { createContext } from "react";
import { IUser } from "../../Interfaces/IUser";

export interface AuthContextType {
    user: IUser | null | string | any
    userToken: IUser | null | string
    tipoToken: IUser | null | string
    userId: IUser | null | string
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void; 
}
export const AuthContext = createContext<AuthContextType>(null!);