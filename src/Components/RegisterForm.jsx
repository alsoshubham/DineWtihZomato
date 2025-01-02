import DynamicInput from "./dynamicInput";

function Register() {
  return (
    <form className="flex justify-center w-1250px h-480px">
      <div className="flex justify-between w-900px h-450px color-#FFFBF7">
        <div className="aspect-ratio-1/1 w-96 h-96">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-96 h-96 text-start">
          <div>
            <h1>Get the Zomato app</h1>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
          </div>
          {/* <div>
            <label>
              <input type="radio" name="myRadio" value="option1" />
              Email
            </label>
            <label>
              <input type="radio" name="myRadio" value="option2" />
              Phone
            </label>
            </div>
            <div>
              if (email) {
                <input type="email" placeholder="Email" />
              } else {
                <input type="tel" placeholder="Phone" />
              }
            </div> */}
          <div>
            <DynamicInput />
          </div>
          <div>
            <p>Download App from</p>
            <div className="app-links flex-col gap-5">
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="Download on the App Store"
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="Get it on Google Play"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
