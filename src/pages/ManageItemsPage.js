import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import PageTitle from "../components/PageTitle"

const ManageItemsPage = () => {
    const [toys, setToys] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/86toys`)
            .then(response => {
                setToys(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const deleteToy = toyId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/86toys/${toyId}`)
            .then(response => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ManageItemsPage">
            <div className="row">
                <div className="col">
                    <PageTitle>ToyTracker - Manage Items</PageTitle>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Collected</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.length && toys.map(toy => {
                                    return (
                                        <tr key={toy._id}>
                                            <td>{ toy.name }</td>
                                            <td>{ new Date(toy.collectedDate).toLocaleDateString('pt-br') }</td>
                                            <td>
                                                <Link className='btn btn-primary me-2' to={`/items/${toy._id}`}>view</Link>
                                                <Link className='btn btn-primary me-2' to={`/items/${toy._id}/edit`}>edit</Link>
                                                <button className="btn btn-danger" onClick={() => deleteToy(toy._id)}>delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageItemsPage