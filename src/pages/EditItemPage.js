import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import PageTitle from "../components/PageTitle"

const EditItemPage = () => {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/400x500')
    const [collectedDate, setCollectedDate] = useState('')
    const [manufacturingDate, setManufacturingDate] = useState('')
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    const navigate = useNavigate()

    const convertDate = str => new Date(str).toISOString().split('T')[0]

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/86toys/${itemId}`)
            .then(response => {
                let { 
                    name, 
                    imageUrl, 
                    collectedDate, 
                    manufacturingDate, 
                    value 
                } = response.data
                setName(name)
                setImageUrl(imageUrl)
                setCollectedDate(collectedDate)
                setManufacturingDate(manufacturingDate)
                setValue(value)
                setLoading(false)
            })
    }, [itemId])

    const handleSubmit = e => {
        e.preventDefault()

        const updatedToy = {
            name, 
            imageUrl,
            collectedDate,
            manufacturingDate,
            value
        }

        axios.put(`${process.env.REACT_APP_API_URL}/86toys/${itemId}`, updatedToy)
            .then(response => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy successfully updated!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="EditItemPage">
            <div className="row">
                <div className="col">
                    <PageTitle>ToyTracker - Edit Item</PageTitle>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img width={400} src={imageUrl ? imageUrl : 'https://via.placeholder.com/400x500'} alt="toy" />
                </div>
                <div className="col">
                    {!loading && (
                                            <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="name" 
                                                    value={name}
                                                    onChange={ e => setName(e.target.value) }
                                                    />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="imageUrl" className="form-label">Image Url</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="imageUrl" 
                                                    value={imageUrl}
                                                    onChange={ e => setImageUrl(e.target.value) }
                                                    />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="collectedDate" className="form-label">Collected At</label>
                                                <input 
                                                    type="datetime-local" 
                                                    className="form-control" 
                                                    id="collectedDate" 
                                                    value={collectedDate}
                                                    onChange={ e => setCollectedDate(e.target.value) }
                                                    />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="manufacturingDate" className="form-label">Manufactured At</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control" 
                                                    id="manufacturingDate" 
                                                    value={convertDate(manufacturingDate)}
                                                    onChange={ e => setManufacturingDate(e.target.value) }
                                                    />
                                            </div>
                                            <div className="mb-3">
                                                <label className='form-label' htmlFor="value">Value</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="currency">$</span>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="value" 
                                                        value={value}
                                                        onChange={ e => setValue(e.target.value) }
                                                        />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button type='submit' className='btn btn-primary'>Update</button>
                                            </div>
                                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditItemPage