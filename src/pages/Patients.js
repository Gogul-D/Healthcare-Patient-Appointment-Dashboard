import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/users")
      .then((res) => setPatients(res.data))
      .catch((err) => console.error(err));
  }, []);

return (
  <div className="container">
    <h2>Patients List</h2>

    {patients.map((p) => (
      <div className="card" key={p.id}>
        <p><b>{p.name}</b></p>
        <p>{p.email}</p>
        <button onClick={() => navigate(`/patient-details/${p.id}`)}>
          View Details
        </button>
      </div>
    ))}
  </div>
);
};
export default Patients;