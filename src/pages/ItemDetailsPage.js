import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Comments from "../components/Comments"
import PageTitle from "../components/PageTitle"

const ItemDetailsPage = () => {
    const { itemId } = useParams()

    const [toy, setToy] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/toys/${itemId}`)
            .then(response => {
                setToy(response.data)
            })
            .catch(err => console.log(err))
    }, [itemId])

    return (
        <div className="ItemDetailsPage">
            <div className="row">
                <div className="col">
                    <PageTitle>ToyTracker - Item Details</PageTitle>
                </div>
            </div>
            <div className="row">
                {
                    toy ? (
                        <>
                            <div className="col">
                                <img width={400} src={ toy.imageUrl ? toy.imageUrl : 'https://via.placeholder.com/400x500' } alt="toy" />
                            </div>
                            <div className="col">
                                <p>{ toy.name }</p>
                                <p>Collected at: { new Date(toy.collectedDate).toLocaleDateString('pt-br') }</p>
                                <p>Manufactured at: { new Date(toy.manufacturingDate).toLocaleDateString('pt-br') }</p>
                                <p>Value: ${ Number(toy.value).toFixed(2) }</p>
                            </div>
                        </>
                    ) : (
                        <p>Sorry, no toy.</p>
                    )
                }
            </div>
            { toy && <Comments toyId={toy._id} />}
        </div>
    )
}

export default ItemDetailsPage