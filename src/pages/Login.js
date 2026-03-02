import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../context/patientContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setPatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validation
    if (!email || !password) {
      alert("Email and Password are required");
      return;
    }

    // Dummy authentication
    if (email === "patient@test.com" && password === "123456") {
      setPatient({
        name: "John",
        email: email,
      });

      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

return (
  <div className="login-wrapper">
    <div className="login-box">
      <div className="login-title">Patient Login</div>
      <div className="login-subtitle">
        Secure access to your healthcare dashboard
      </div>

      <div className="input-group">
       
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Login</button>

      <div className="login-footer">
        © 2026 Healthcare Management System
      </div>
    </div>
  </div>
);
};

export default Login;