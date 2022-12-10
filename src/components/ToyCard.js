import { Link } from "react-router-dom"
import './ToyCard.css'

const ToyCard = ({toy}) => {
    return (
        <div className="col ToyCard mb-4">
            <div className="card">
                <Link to={`/items/${toy._id}`} >
                    <img src={toy.imageUrl} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/items/${toy._id}`}>{ toy.name }</Link></h5>
                    <p className="card-text">Manufactured: { new Date(toy.manufacturingDate).toLocaleDateString('pt-br') }</p>
                </div>
            </div>
        </div>
    )
}

export default ToyCard