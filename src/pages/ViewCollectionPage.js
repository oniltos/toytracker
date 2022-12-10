import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ToyCard from '../components/ToyCard'

const ViewCollectionPage = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/86toys`)
            .then(response => {
                setToys(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="ViewCollectionPage">
            <div className="row">
                <div className="col">
                    <h1>This collection has { toys.length } items</h1>
                </div>
            </div>
            <div className="row">
                { toys.length && (
                    <>
                        {
                            toys.map(toy => {
                                return <ToyCard key={toy._id} toy={toy} />
                            })
                        }
                    </>
                ) }
            </div>
        </div>
    )
}

export default ViewCollectionPage