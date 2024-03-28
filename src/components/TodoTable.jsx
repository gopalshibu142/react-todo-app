import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import { Link } from 'react-router-dom'

const API = 'https://stingray-app-axdpn.ondigitalocean.app/api/todo/find/user'

const TodoTable = () => {

    const [myTodos, setTodos] = useState(null)
    const todoCondition = myTodos != null && myTodos.length > 0

    const user_id = sessionStorage.getItem('id')
    useEffect(() => {

        fetchAllTodos()
    }, []);

    const fetchAllTodos = async () => {
        try {
            await axios.post(API, { user_id })
                .then(res => {
                    console.log(res)
                    setTodos(res.data)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Todo Title </th>
                        <th>Todo Description </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {todoCondition ? myTodos.map((item, index) => (

                        <tr key={index}>
                            <th>{item.todo_title}</th>
                            <td>{item.todo_description}</td>
                            <td> 
                            <Link to={`/edittodo/${item.id}`}><button class="btn btn-success">Edit</button></Link> 
                            &nbsp;&nbsp;
                            <Link to={`/delete/${item.id}`}><button class="btn btn-error">Delete</button></Link>
                            </td>
                        </tr>


                    )) : <Loading />}


                </tbody>
            </table>
        </div>
    )
}

export default TodoTable