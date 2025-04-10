import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import useRestaurantMenu from "../../utilities/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import React, {useState} from "react";

const RestaurantMenu = () => {
  const [ showIndex, setShowIndex ] = useState(null);
  const params = useParams();

  const resInfo = useRestaurantMenu(params.resId);
 
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10">{name}</h1>
      <h3 className="font-bold my-5">{cuisines.join(", ")}</h3>
      {categories.map(
        (item, index) => (
            <RestaurantCategories
              key={item.card.card.categoryId}
              data={item.card.card}
              showItems={index === showIndex ? true : false }
              setShowIndex={setShowIndex}
              index={index}
            />
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
