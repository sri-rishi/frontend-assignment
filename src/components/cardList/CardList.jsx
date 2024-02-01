import {BALL, BIKE, CAR, HAND, ROBOTICS, SPACE } from "../../assets";
import {Card} from "../index";

const CardList = () => {
    return (
        <div className="card-list">
          <Card 
            backgroundImageURL={BALL}
            height={"30rem"}
            chipText1={"technology"}
            chipText2={"art"}
          />
          <Card 
            backgroundImageURL={HAND}
            height={"42rem"}
            chipText1={"technology"}
            chipText2={"robotics"}
          />
          <Card 
            backgroundImageURL={CAR}
            height={"21rem"}
            chipText1={"machine"}
            chipText2={"automobile"}
          />
          <Card 
            backgroundImageURL={SPACE}
            height={"21rem"}
            chipText1={"machine"}
            chipText2={"automobile"}
          />
          <Card 
            backgroundImageURL={ROBOTICS}
            height={"21rem"}
            chipText1={"machine"}
            chipText2={"automobile"}
          />
          <Card 
            backgroundImageURL={BIKE}
            height={"21rem"}
            chipText1={"machine"}
            chipText2={"automobile"}
          />
        </div>
    )
}

export default CardList;