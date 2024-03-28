import React from 'react'
import { useForm } from 'react-hook-form'
let API = 'https://stingray-app-axdpn.ondigitalocean.app/api/todo/update'
import axios from 'axios'
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'

const UpdateTODO = () => {
    const title = 'ToDo'
    const description = 'Add your ToDo here'
    const navigate = useNavigate()
    const {id} = useParams("id")
    console.log(id)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const Submit = async (data) => {
        console.log(data)
        const {todo_title,todo_description} = data
        API = `https://stingray-app-axdpn.ondigitalocean.app/api/todo/update/${id}`
        try {
            await axios.put(API, {
                todo_title,
                todo_description
            })
                .then(res => {
                    navigate('/dashboard')
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
                    <p className="py-5">{description}</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onClick={handleSubmit(Submit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ToDo Title</span>
                            </label>
                            <input type="text" placeholder="title" className="input input-bordered"
                            {...register("todo_title",{required: true})}
                            />
                            {errors.todo_title && <span>Title is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ToDo Description</span>
                            </label>
                            <input type="text" placeholder="description" className="input input-bordered"
                            {...register("todo_description",{required: true})}
                            />
                            {errors.todo_description && <span>Description is required</span>}
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">Submit</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateTODO
