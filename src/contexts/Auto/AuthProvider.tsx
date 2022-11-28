import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { IUser } from "../../Interfaces/IUser"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUser | null | string>(null)
    const [email, setEmail] = useState<IUser | null | string>(null)
    const [userToken, setUserToken] = useState<IUser | null | string>(null)
    const [tipoToken, setTipoToken] = useState<IUser | null | string>(null)
    const [userId, setUserId] = useState<IUser | null | string>(null)
    const api = useApi();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("nomeUser");
        const loggedInToken = localStorage.getItem("token");
        const loggedInTipo = localStorage.getItem("tipo");
        const loggedInUserId = localStorage.getItem("userId");
        if (loggedInUser) {
            setUser(loggedInUser);
            setUserToken(loggedInToken)
            setTipoToken(loggedInTipo)
            setUserId(loggedInUserId)
        }


    }, []);

    const signin = async (email: string, password: string) => {
        var hours = 1; // to clear the localStorage after 1 hour
            // (if someone want to clear after 8hrs simply change hours=8)
            var now: any = new Date().getTime();
            var setupTime: any = localStorage.getItem('setupTime');
            if (setupTime == null) {
                localStorage.setItem('setupTime', now)
            } else {
                if (now - setupTime > hours * 60 * 60 * 1000) {
                    localStorage.clear()
                    localStorage.setItem('setupTime', now);
                }
            }
            
        try {
            const data = await api.signin(email, password)
            if (data.user) {
                setUser(data.user.nomeUser);
                setUserToken(data.user.token)
                setTipoToken(data.user.tipo)
                setUserId(data.user.userId)
                setToken(data.user.nomeUser,
                    data.user.emailUser,
                    data.user.token,
                    data.user.tipo,
                    data.user.userId)
                //console.log(user)
                return true;
            }

        } catch (error) {
            console.log(error)
        }
        return false;
    }

    const signout = async () => {
        localStorage.clear();
        await api.signout();

    }

    const setToken = (nomeUser: string, emailUser: string, token: string, tipo: string, userId: string) => {
        localStorage.setItem('nomeUser', nomeUser)
        localStorage.setItem('emailUser', emailUser)
        localStorage.setItem('token', token)
        localStorage.setItem('tipo', tipo)
        localStorage.setItem('userId', userId)
    }

    return (
        <AuthContext.Provider value={{ user, userToken, tipoToken, userId, signin, signout }} >
            {children}
        </AuthContext.Provider>
    )
}