import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PatientContext } from "../context/patientContext";

const Navbar = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setPatient(null);      // clear context
    navigate("/login");   // redirect to login
  };

  return (
   <nav>
  <h3>Healthcare Dashboard</h3>

  {patient && (
    <div className="nav-right">
      <p>Welcome Patient: <b>{patient.name}</b></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )}
</nav>
  );
};

export default Navbar;