/* eslint-disable react/no-unescaped-entities */
// import QuickSearchItems from "./Constant"
// import QuickSearch from "./QuickSearch";
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
  return (
    <div>
      <div className="flex justify-evenly">
        <Title />
        <div className="flex">
          <ul className="flex justify-around">
            <li>Investor relation</li>
            <li>Add Restaurant</li>
            <li>Login</li>
            <li>Signup</li>
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
      <div className="flex flex-column gap-10">
        <div>
          <img src="" alt="" />
          <h4>Order Online</h4>
          <p>Stay home and order to your doorstep</p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Dining</h4>
          <p>View the city's favourite dining venue</p>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Live Events</h4>
          <p>Discover India's best events and concerts</p>
        </div>
      </div>
      {/* <div className="QuickSearchItems">
        {
          QuickSearchItems.map(()=>{
            return(
              <QuickSearch/>
            )
          })
        }
      </div> */}
    </div>
  );
}

export default Header;
