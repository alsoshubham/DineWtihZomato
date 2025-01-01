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
    <div className="login-container flex justify-center items-center bg-slate-600 min-h-screen min-w-screen">
      <div className="login-form flex p-5 ">
        <form noValidate className="form flex flex-col gap-4">
          <h2>Login</h2>
          {loginMethod === "phone" ? (
          <div className="phone-input">
            <select className="country-code">
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        ) : (
          <div className="email-input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        <button className="send-otp" onClick={handleSendOTP}>
          {loginMethod === "phone" ? "Send One Time Password" : "Send Login Link"}
        </button>
          <div>or</div>
          {loginMethod === "phone" ? (
          <button className="email-login" onClick={() => setLoginMethod("email")}>
            Continue with Email
          </button>
        ) : (
          <button className="phone-login" onClick={() => setLoginMethod("phone")}>
            Continue with Phone
          </button>
        )}
          <div>
            <button className="google-login">Login with Google</button>
          </div>
          <button type="submit" onClick={() => navigate("/")}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
