import LogoC from './LogoC.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//menu ecommerce
function NavBar(){
    return(
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
            <img src={LogoC} alt="" width="50" height="40" className="d-inline-block align-text-top"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
                </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className=".navbar-text" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Samsung</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Iphone</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Promociones</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    );
}
export default NavBar;