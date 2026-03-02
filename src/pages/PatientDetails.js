import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`)
      .then((res) => setPatient(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!patient) {
    return <p style={{ padding: "20px" }}>Loading...</p>;
  }

  return (
  <div className="container">
    <div className="card">
      <h2>{patient.name}</h2>
      <p><b>Email:</b> {patient.email}</p>
      <p><b>Phone:</b> {patient.phone}</p>
      <p><b>Address:</b> {patient.address.street}</p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  </div>
);
};
export default PatientDetails;