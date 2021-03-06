import React, { useState} from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'

const Login = (props) => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    const handleSubmit = () => {
        axiosWithAuth()
        .post('/login', form)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/bubbles')
        })
        .catch((err) => console.log('Login Error', err))
    }

    return (
        <>
        <h1>Welcome to the Bubble App 2020</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <input 
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            />
            <br />
            <input 
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
        </>
    )

}

export default Login