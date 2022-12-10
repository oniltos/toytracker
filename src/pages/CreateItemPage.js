import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import PageTitle from "../components/PageTitle"

const CreateItemPage = () => {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/400x500')
    const [collectedDate, setCollectedDate] = useState('')
    const [manufacturingDate, setManufacturingDate] = useState('')
    const [value, setValue] = useState(0)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const newToy = {
            name, 
            imageUrl,
            collectedDate,
            manufacturingDate,
            value
        }

        axios.post(`${process.env.REACT_APP_API_URL}/86toys`, newToy)
            .then(response => {
                navigate('/items/manage')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="CreateItemPage">
            <div className="row">
                <div className="col">
                    <PageTitle>ToyTracker - Create Item</PageTitle>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img width={400} src={imageUrl ? imageUrl : 'https://via.placeholder.com/400x500'} alt="toy" />
                </div>
                <div className="col">
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
                                type="text" 
                                className="form-control" 
                                id="collectedDate" 
                                value={collectedDate}
                                onChange={ e => setCollectedDate(e.target.value) }
                                />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="manufacturingDate" className="form-label">Manufactured At</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="manufacturingDate" 
                                value={manufacturingDate}
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
                            <button type='submit' className='btn btn-primary'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateItemPage