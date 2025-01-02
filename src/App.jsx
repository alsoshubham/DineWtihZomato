import "./App.css";
import Header from "./Components/Header";
import RegisterForm from './Components/RegisterForm';
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";

function App() {
  return (
    /**
     * Main structure of the App component
     * - Header: Contains logo, navigation items, login/signup, and search bar
     * - Collection: Displays restaurant collections
     * - RegisterForm: Form for user registration
     * - Footer: Contains links and copyright information
     */
    <div className="bg-white text-black min-w-screen-lg">
      <Header />
      <Collection />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
