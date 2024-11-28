function RegisterForm () {
    return (
      <form>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Get the Zomato app</h2>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
            <label>
              <input type="radio" name="myRadio" value="option1" />
              Email
            </label>
            <label>
              <input type="radio" name="myRadio" value="option2" />
              Phone
            </label>
            <input type="email" placeholder="Email" />
            <button>Share App Link</button>
            <div>
              <p>Download App from</p>
              <img src="" alt="PlayStore" />
              <img src="" alt="AppStore" />
            </div>
          </div>
        </div>
      </form>
    );
  };

  export default RegisterForm