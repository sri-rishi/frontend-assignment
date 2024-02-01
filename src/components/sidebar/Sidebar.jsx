import {
    BiFilterAlt, 
    IoIosTrendingUp, 
    GoSponsorTiers, 
    IoHeart,
    IoCaretDownOutline, 
    NEWEST_CHIP, 
    INDIAN_FLAG, 
    SEAL_OF_TRUST
} from "../../assets";
import {Button} from "../index"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header border-bottom">
                <p>APPLY FILTER</p>
                <BiFilterAlt />
            </div>
            <div className="sidebar-filter border-bottom">
                <div className="sidebar-filter-section">
                    <Button className={"sidebar-filter-btn filter-btn-1-bg"} text={"Trending"} icon={<IoIosTrendingUp className="filter-icon" />}/>
                    <Button className={"sidebar-filter-btn filter-btn-2-bg"} text={"Sponsored"} icon={<GoSponsorTiers className="filter-icon" />}/>
                </div>
                <div className="sidebar-filter-section">
                    <button className="sidebar-filter-btn filter-btn-3-bg" >
                        <p>Newest</p>
                        <div className="new-chip">
                            <img src={NEWEST_CHIP} alt="new chip"/>
                        </div>
                    </button>
                    <Button className={"sidebar-filter-btn filter-btn-4-bg"}  text={"Most liked"} icon={<IoHeart className="filter-icon" />}/>
                </div>
            </div>
            <div className="sidebar-selector-box border-bottom">
                <div className="sidebar-selector">
                    <p>CATEGORY</p>
                    <IoCaretDownOutline />
                </div>
                <div className="sidebar-selector">
                    <div className="sidebar-selector-title">
                        <div className="indian-flag">
                            <img src={INDIAN_FLAG} alt="Indian Flag" />
                        </div>
                        <p>INDIA</p>
                    </div>
                    <IoCaretDownOutline />
                </div>
            </div>
            <div className="seal-of-trust-section">
                <div className="seal-of-trust-box">
                    <img src={SEAL_OF_TRUST} alt="Seal of trust" />
                </div>
                <Button className={"freemium-btn"} text={"Subscribe to a Freemium Plan"}/>
            </div>
        </div>
    )
}

export default Sidebar;