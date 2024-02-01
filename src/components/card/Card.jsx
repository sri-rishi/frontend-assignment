import {PLAYING_BUTTON, USER_1, USER_2, USER_3 } from "../../assets";
import {Chips} from "../index";

const Card = ({backgroundImageURL, height, chipText1, chipText2}) => {
    return(
        <div 
            style={{
                backgroundImage: `url(${backgroundImageURL})`,
                height: `${height}`
            }}
            className="card"
        >
            <div className="card-main">
                <div className="owner-user">
                    <p>OWNER</p>
                    <div className="owner-user-imgs">
                        <div className="user-1">
                            <img src={USER_1} alt="user" />
                        </div>
                        <div className="user-2">
                            <img src={USER_2} alt="user" />
                        </div>
                        <div className="user-3">
                            <img src={USER_3} alt="user" />
                        </div>
                    </div>
                </div>
                <div className="chips-box">
                    <Chips text={chipText1}/>
                    <Chips text={chipText2}/>
                </div>
            </div>
            <div className="playing-btn">
                <img src={PLAYING_BUTTON} alt="playing button" />
            </div>
        </div>
    )
}

export default Card