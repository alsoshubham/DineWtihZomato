import { QuickSearchList } from "./Constant";
import QuickSearch from "./QuickSearch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "./Body";

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
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    const isLoggedin = true;

    if (isLoggedin) {
      navigate("/");
    }
  };
  return !isLoggedin ? (
    <div>
      <div className="flex justify-evenly">
        <Title />
        <div className="flex">
          <ul className="flex justify-around">
            <li>
              <Link to="/">Investor relation</Link>
            </li>
            <li>
              <Link to="/">Add Restaurant</Link>
            </li>
            <li>
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Zomato</h1>
        <p>Discover the best food & drinks in Delhi NCR</p>
        <div className=" flex gap-5 justify-center">
          <input type= "search" placeholder="enter your delivery location" className="search-input bg-transparent border-1 solid border-black min-w-fit"></input>
          <input
            type="search"
            placeholder="Search for restuarant, cuisines, or dish"
            className="search-input bg-transparent border-1 solid border-black"
          />
        </div>
      </div>
      <div className="QuickSearch">
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
          <button className="logout-btn" onClick={() => setIsLoggedin(false)}>
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
