import { RES_IMG } from "../../utilities/constants";

const RestaurantCard = (props) => {
   const {resData} = props;
   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla
   } = resData.info
  
    return (
      <div className="res-card">
        <img
          alt="res-logo"
          className="res-logo"
          src={
            RES_IMG +
            cloudinaryImageId
          }
        />
        <h5>{name}</h5>
        <h6>{cuisines.join(" , ")}</h6>
        <h6>{avgRating}</h6>
        <h6>{sla.slaString}</h6>
      </div>
    );
  };
export default RestaurantCard;