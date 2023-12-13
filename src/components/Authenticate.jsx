import { useState } from 'react'

export default function Authenticate({ token }) {

const [successMessage, setSuccessMessage] = useState(null)
const [username, setUsername] = useState("")
const [error, setError] = useState(null)
    
    async function handleClick() {
        try{
            const res = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            const result = await res.json();
            console.log(result)
            console.log(result.message)
            setSuccessMessage(result.message);
            console.log(result.data.username)
            setUsername(result.data.username)
            console.log(username)
        } catch(e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {username && <p>{username}</p>}
        {error && <p>{error}</p>}
        <button onClick={() => {handleClick();}}>
        Authenticate Token
        </button>
        </>
    );
}