import { LOGO } from "../../assets";
import { SearchBox} from "../index";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-heading">
                <div className="logo">
                    <img src={LOGO} alt="logo"/>
                </div>
                <h2 className="title">Bandiya</h2>
            </div>
            <div className="nav-tabs">
                <p>TRENDING</p>
                <p>COLLABORATE</p>
                <p>BUY</p>
                <p>LIST</p>
            </div>
            <button className="nav-btn">
                <p className="nav-btn-text">Upgrade</p>
            </button>
            <SearchBox />
        </nav>
    )
}

export default Navbar;