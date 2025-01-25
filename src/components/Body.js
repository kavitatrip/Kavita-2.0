import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [ resList, setResList] = useState([]);
  const [ searchText, setSearchText ] = useState('');
  const [ filteredList, setFilteredList ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await res.json();
      console.log(resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      const displayData = resData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setResList(displayData);
      setFilteredList(displayData);

      console.log(resData);
      
  };
  
    return (
      <div className="body">
        <div className="btn-filter">
        <button onClick={() => {
          const dataa = resList.filter((res) => 
            (res.info.avgRating > 4.3)
          )
          console.log(dataa);
          setResList(dataa);
        }}>Top Rated Restaurants</button>
         <div className="btn-class">
         <input placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
         <button 
         onClick={() => {
          const filteredValue = resList.filter((res) => res.info.name.includes(searchText))
          setFilteredList(filteredValue);
         }}
        >Search</button>
         </div>
        <div> 
        </div>
        </div>
        <div className="res-container">
          {filteredList?.map((item) => (
            <RestaurantCard key={item?.info.id} resData={item}/>
            ))}
        </div>
      </div>
    );
  };
export default Body;