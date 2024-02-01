import { LOGO } from "../../assets";
import {Button, SearchBox} from "../index";

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
            <Button text={"Upgrade"} className={"nav-btn"}/>
            <SearchBox />
        </nav>
    )
}

export default Navbar;