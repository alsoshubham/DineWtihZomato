import "./App.css";
import Header from "./Components/Header"
import RegisterForm from './Components/RegisterForm'
import Collection from "./Components/Collection"
import Footer from "./Components/Footer"

function App() {

  return (
    /**
     * -header
     *       -logo
     *       -nav items
     *       -login/Signup
     *
     * -body
     *      -heading
     *      -paragraph description
     *      -search bar
     *      -cards
     *            -order online
     *            -Dining
     *            -Live events
     *      -Collection
     *            -Paragraph
     *            -link (right side)
     *            -Restaurant Lists
     *                             -Restuarant Card
     *                             -image
     *                             -name
     *                             -rating
     *            -Registration form
     *                              -image(left side)
     *                              -Title(right side)
     *                              -description paragraph
     *                              -form
     *                                   -option
     *                                          -email
     *                                          -phone
     *                                   -input type email
     *                                   -button submit
     *                                   -icons
     *            -Restuarant lists
     *
     * -footer
     *        -links
     *        -copyrights
     */
    <div className="bg-white text-black min-w-screen-lg">
      <Header/>
      <Collection />
      <RegisterForm/>
      <Footer/>
    </div>
  );
}

export default App;
