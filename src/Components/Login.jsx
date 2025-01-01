import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loginMethod, setLoginMethod] = useState("");

  const handleSendOTP = () => {
    if (loginMethod === "phone") {
      alert(`OTP sent to ${phone}`);
    } else {
      alert(`Login link sent to ${email}`);
    }
  };

  return (
    <div className="login-container flex justify-center items-center bg-gray-800 min-h-screen min-w-screen text-white">
      <div className="login-form bg-gray-700 rounded-lg shadow-lg p-8">
        <form noValidate className="form flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          {loginMethod === "phone" ? (
          <div className="phone-input flex items-center gap-2">
            <select className="country-code border border-gray-500 rounded p-2 bg-gray-600 text-white">
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-500 rounded p-2 flex-1 bg-gray-600 text-white"
            />
          </div>
        ) : (
          <div className="email-input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 rounded p-2 w-full bg-gray-600 text-white"
            />
          </div>
        )}
        <button className="send-otp bg-red-500 text-white rounded p-2 mt-4 hover:bg-red-600" onClick={handleSendOTP}>
          {loginMethod === "phone" ? "Send One Time Password" : "Send Login Link"}
        </button>
          <div className="text-center my-4">or</div>
          {loginMethod === "phone" ? (
          <button className="email-login bg-green-600 text-white rounded p-2 hover:bg-green-700" onClick={() => setLoginMethod("email")}>
            Continue with Email
          </button>
        ) : (
          <button className="phone-login bg-green-600 text-white rounded p-2 hover:bg-green-700" onClick={() => setLoginMethod("phone")}>
            Continue with Phone
          </button>
        )}
          <div className="text-center my-4">
            <button className="google-login bg-red-500 text-white rounded p-2 hover:bg-red-600">Login with Google</button>
          </div>
          <button type="submit" className="bg-green-600 text-white rounded p-2 hover:bg-green-700" onClick={() => navigate("/")}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
