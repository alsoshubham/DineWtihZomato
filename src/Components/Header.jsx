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
        <div className=" flex gap-5">
          <input type="label" className="bg-white "></input>
          <input
            type="search"
            placeholder="Search for restuarant, cuisines, or dish"
            className="bg-white text-black"
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
      <div className="QuickSearch">
        {QuickSearchList.map((items) => {
          return <QuickSearch key={items.data.categoryType} {...items.data} />;
        })}
      </div>
    </div>
  );
}

export default Header;
