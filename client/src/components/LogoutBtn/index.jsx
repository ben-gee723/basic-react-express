import store from "../../store/Context"

export default function Logout () {
    // VARIABLEN
    const { setUser } = store()

    // onClick: logout Funktion
    const logout = async () => {
        const res = await fetch("http://localhost:3001/user/logout", {
            method: "POST",
        })
        const data = await res.json()
        setUser(data.null);
    }
    return (
        <button onClick={logout} >Logout</button>
    )
}