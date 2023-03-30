import { createContext, useState, useContext, useEffect } from "react";
import data from '../data/data.json'

const IntialContext = createContext();

export function ParentContext ({children}){
    const [ cards, setCards ] = useState ([]);

    const getData = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        setCards(data.results) 
    }

    useEffect(()=> {
        getData()
    }, [])

    const value = { data, cards };
    return(
        <IntialContext.Provider value={value}>
            {children}
        </IntialContext.Provider>
    )
}

const store = () =>  useContext(IntialContext)
export default store;