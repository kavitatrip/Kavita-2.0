import { useState } from "react";
import { LOGO_URL } from "../../utilities/constants";

const HeaderComponent = () => {
  const [login, setLogin] = useState('Login');
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        {/* <div className="search">
                  <input>Search</input>
              </div> */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Cart</li>
            <li><button onClick={() => setLogin('Login')}>{login}</button></li>
          </ul>
        </div>
      </div>
    );
  };

export default HeaderComponent;