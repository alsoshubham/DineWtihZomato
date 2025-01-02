import { QuickSearchList } from "./Constant";
import QuickSearch from "./QuickSearch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import Body from "./SearchBar";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img src="" alt="Get the App" />
      </a>
    </div>
  );
};

function Header() {
  const [isLoggedin, setIsLoggedin] = useState(true); //kya initially login hai ya nahi
  const navigate = useNavigate();

  return !isLoggedin ? (
    <div>
      <div className="flex justify-evenly">
        <Title />
        <div className="flex">
          <ul className="flex justify-around gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <button className="yourOrders bg-transparent">
                <Link to="/YourOrders">
                  <HiOutlineShoppingBag />
                </Link>
              </button>
            </li>
            <li>
              {isLoggedin ? (
                <button
                  className="logout-btn bg-transparent hover:border-red-500"
                  onClick={() => {
                    setIsLoggedin(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="login-btn bg-transparent hover:border-green-500"
                  onClick={() => navigate("/login")}
                >
                  <FiUser />
                </button>
              )}
            </li>
            <li>
              <button className="partner-btn bg-green-600 border-1 solid border-transparent rounded-md">
                <Link to="/addRestauarant" className="text-white">
                  Partner With Us
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Zomato</h1>
        <p>Discover the best food & drinks in Delhi NCR</p>
        <div className="search flex justify-center items-center mx-auto w-3/4 max-w-lg">
          <FaLocationDot className="mr-2 text-red-500" />
          <select className="select-location bg-transparent border-1 solid border-gray-500 w-1/2 p-2">
            <option type="text" value="" disabled selected>
              Enter your delivery location
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
          </select>
          <input
            type="search"
            placeholder="Search for restaurant, cuisines, or dish"
            className="search-input bg-transparent border-1 solid border-gray-500 w-1/2 p-2 ml-2"
          />
        </div>
      </div>
      <div className="QuickSearch flex justify-around gap-5 ">
        {QuickSearchList.map((items) => {
          return <QuickSearch key={items.data.categoryType} {...items.data} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-evenly">
        <Title />
        <div className="flex">
          <button className="yourOrders bg-transparent gap-2">
            <Link to="/YourOrders">
              <HiOutlineShoppingBag />
            </Link>
          </button>
          <button
            className="logout-btn bg-transparent hover:border-red-500"
            onClick={() => setIsLoggedin(false)}
          >
            Logout
          </button>
        </div>
      </div>
      <div>
        <h1>Zomato</h1>
        <p>Discover the best food & drinks in Delhi NCR</p>
        <Body />
      </div>
      <div className="QuickSearch flex justify-around gap-5 ">
        {QuickSearchList.map((items) => {
          return <QuickSearch key={items.data.categoryType} {...items.data} />;
        })}
      </div>
    </div>
  );
}

export default Header;