import { useContext, useState } from "react";
import { CART_LOGO, LOGO_URL } from "../../utilities/constants";
import { Link } from "react-router-dom";
import useActiveStatus from "../../utilities/useActiveStatus";
import UserContext  from "../../utilities/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");
  const activeStatus = useActiveStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  //here selector gives us access to the whole store but we only concern about item carts only so it is store.cart.items
  const cartData = useSelector((store) => store.cart.items);
  console.log(cartData);
  //header is subscribed to the store through useSelector
  
  return (
    <div className="flex justify-between bg-red-100 shadow-lg mr-1">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      {/* <div className="search">
                  <input>Search</input>
              </div> */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
            <h6>Online Status: {activeStatus ? "✅" : "❌" }</h6>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4"> 
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
           <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3"> 
            <Link to="/cart"> 🛒 {cartData.length}</Link> 
          </li>
          <li>
            <button onClick={() => setLogin("Login")}>{login}</button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
