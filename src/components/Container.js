import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Container() {
    const [name, setname] = useState({name:''})
    const [sent, setsent] = useState(false)
    const myRef = useRef(null)


    useEffect(() => {
        myRef.current.focus()
    }, [])

    const submitHandler=e=>{
        e.preventDefault()
        axios.post('https://kalkidan.herokuapp.com/', name)
        .then(res=>{
            setsent(true)
        })
        .catch(err=>{
            setsent(false)
        })
    }
    const Form=(
        <div>
        <h2>Enter your name</h2>
        <form onSubmit={submitHandler}>name:
        <input ref={myRef} type='text' value={name.name} onChange={e=>setname({name:e.target.value})} />
        <input type='submit' value='submit'/>
        </form>
    </div>
    )
    const Success=(
        <h1>Thank You</h1>
    )
    return (
       <>
           {sent?Success:Form}
       </>
    )
}

export default Container
