import { Link } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="row">
                <div className="col">
                    <h1>ToyTracker</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://recreio.uol.com.br/media/_versions/legacy/2021/04/27/action-figures-para-colecionar-e-decorar-1229193_widemd.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">View Collection</h5>
                            <p className="card-text">View the action figures collection listed as a grid.</p>
                            <a href="#" className="btn btn-primary">View Collection</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://cdn.dribbble.com/users/1415337/screenshots/6708598/table_2_4x.png?compress=1&resize=400x300&vertical=top" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Manage Items</h5>
                            <p className="card-text">Create and edit items and add comments.</p>
                            <Link to={'/items/manage'} className="btn btn-primary">Manage Items</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage