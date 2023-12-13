import { useState } from 'react'

export default function SignUpForm({setToken}) {

    const [username, setUsername] = useState("")    
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    

    //Submit function
    async function handleSubmit(event) {
        //Prevent refresh of page
        event.preventDefault()

        //Read the data from state
        console.log({username, password})

        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: {username},
                    password: {password}
                })
            })
            const result = await response.json();
            console.log(result);
            setToken(result.token)
           
        } catch(error) {
            setError(error.message);
        }
        setUsername("");
        setPassword("");
    }

    return(
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}

        <form method='post' onSubmit={handleSubmit}>
            <label>Username:{""}
                <input
                    type='text'
                    value={username}
                    onChange= {(event) => {
                        setUsername(event.target.value)
                    
                    }}
                />

            </label>

            <label>Password:{""}
                <input
                    type='text'
                    value={password}
                    onChange= {(event) => {
                        setPassword(event.target.value)
                    }}                
                />

            </label>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}