import { createContext, useState, useContext } from "react";

const IntialContext = createContext();

export function ParentContext ({children}){
    /* Beispiel user
        {
            name: "",
            email: "",
            isLogin: null
        }
    */

    // Auf null wenn niemand eingeloggt ist
    const [ user, setUser ] = useState (null);

    const value = { user, setUser };
    return(
        <IntialContext.Provider value={value}>
            {children}
        </IntialContext.Provider>
    )
}

const store = () =>  useContext(IntialContext);
export default store;