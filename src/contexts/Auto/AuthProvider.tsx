import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { IUser } from "../../Interfaces/IUser"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({ children }: { children: JSX.Element } ) => {
    const [user, setUser] = useState<IUser | null>(null)
    const api = useApi();

   /* useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateTolken(storageData);
                if(data.user) {
                    setUser(data.user)
                }
            }
        }
        validateToken();
    }, []) */

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password)
        if(data.user && data.token) {
            setUser(data.user);
            setToken(data.token)
            return true;
        }
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.signout();

    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }} >
            {children}
        </AuthContext.Provider>
    )
}