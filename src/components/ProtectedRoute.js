import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { PatientContext } from "../context/patientContext";

const ProtectedRoute = ({ children }) => {
  const { patient } = useContext(PatientContext);

  // If NOT logged in → redirect to login
  if (!patient) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
};

export default ProtectedRoute;