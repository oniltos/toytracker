import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ToyTracker</a>
                <Link className='btn btn-light btn-sm' to='/items/create'>Add new item</Link>
            </div>
        </nav>
    )
}

export default Navbar