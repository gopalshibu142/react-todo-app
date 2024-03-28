import React from 'react'
import { useForm } from 'react-hook-form'
const API = 'https://stingray-app-axdpn.ondigitalocean.app/api/auth/signup'
import axios from 'axios'
const RegisterForm = () => {
    const title = 'Register'
    const description = 'Please Register'

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const Submit = async (data) => {
        console.log(data)
        const { username, email, password } = data
        try {
            await axios.post(API, {
                username,
                email,
                password
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(Submit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="username"
                                className="input input-bordered"
                                {...register("username", { required: true })}
                            />
                            {errors.username && <span>User Name is Required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>Email is Required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && <span>Password is Required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="text-center mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-500 hover:underline">
                                Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
