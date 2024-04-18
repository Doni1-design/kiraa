import {
  faCar,
  faPhone,
  faHome,faHotel,faUser,faWarehouse
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./headerx.css";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../Context/Searchcontext";
import { AuthContext } from "../../Context/Authcontext";
import useF from "../../Hooks/useF";
import { Helmet } from 'react-helmet';
import { GlobalContext } from "../../Context/ReservationContext";



const Header = ({ type }) => {

  const { reservationCount } = useContext(GlobalContext);

  
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();



 
  
  const { dispatch } = useContext(SearchContext, AuthContext);
  const { user } = useContext(AuthContext);
  const handleclick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };

 

  return (
    <div className="headerx">
      <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      {/* ... Autres éléments de votre composant ... */}
    </div>
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              
            </h1>
            <p className="headerDesc">
            <div class="profile">
    {/* Nom du profil */}
    {user ? (
          
          user.username
        ) : (
          <div className="navItems">
           
            
          </div>
        )}
  </div>
  <div class="shop">
    {/* Icône du shop */}
    <FontAwesomeIcon icon={faWarehouse} />
        <span>{reservationCount}</span>
  </div>

  <div class="icon-sliderc">
                <a href="/">
                <div class="icon-containerc">
                  <FontAwesomeIcon  icon={faCar} className="icon" />
                </div>
                </a>
                <a href="/agences">
                <div class="icon-containerc">
                  <FontAwesomeIcon icon={faHome} className="icon" />
                </div>
                </a>
                <div class="icon-containerc" style={{ display: "none" }}>
                  <FontAwesomeIcon icon={faHotel} className="icon" style={{ display: "none" }} />
                </div>
                <a href="/contact">
                <div class="icon-containerc">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </div>
                </a>
                <a href="/about">
                <div class="icon-containerc">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                </div>
                </a>
              </div>
            </p>
            




             
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
