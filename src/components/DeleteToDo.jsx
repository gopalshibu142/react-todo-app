import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteToDo = () => {

    const {id} = useParams("id")
    console.log(id)
    const navigate = useNavigate()

    const Submit = async (data) => {
        const API = `https://stingray-app-axdpn.ondigitalocean.app/api/todo/delete`
        try {
            await axios.post(API, {
                "todo_id": id
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
                    <h1 className="text-5xl font-bold">Do you want to delete this {id}</h1>
                    <p className="py-5">
                        <button className='btn btn-success' onClick={() => Submit()}>Delete</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeleteToDo
