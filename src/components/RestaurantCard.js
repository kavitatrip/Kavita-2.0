import { RES_IMG } from "../../utilities/constants";

const RestaurantCard = (props) => {
   const {resData} = props;
   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla
   } = resData.card.card.info

  //  console.log(resData);
   
  
    return (
      <div className="m-4 p-4 w-[300px] rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
        <img
          alt="res-logo"
          className="h-[190px] w-100"
          src={
            RES_IMG +
            cloudinaryImageId
          }
        />
        <h5 className="font-bold py-2 text-lg">{name}</h5>
        <h6>{cuisines.join(" , ")}</h6>
        <h6>{avgRating}</h6>
        <h6>{sla.slaString}</h6>
      </div>
    );
  };
export default RestaurantCard;