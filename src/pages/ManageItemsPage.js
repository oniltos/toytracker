import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

const apiURL = 'https://ironrest.cyclic.app/86toys'

const ManageItemsPage = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                setToys(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="ManageItemsPage">
            <div className="row">
                <div className="col">
                    <h1>ToyTracker - Manage Items</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
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
                                        <tr>
                                            <td>{ toy.name }</td>
                                            <td>{ toy.collectedDate }</td>
                                            <td>
                                                <Link className='btn btn-primary' to='#'>view</Link><Link className='btn btn-primary' to='#'>edit</Link>
                                                <button className="btn btn-danger">delete</button>
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