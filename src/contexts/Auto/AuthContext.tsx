import { createContext } from "react";
import { IUser } from "../../Interfaces/IUser";

export interface AuthContextType {
    user: IUser | null
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void; 
}
export const AuthContext = createContext<AuthContextType>(null!);