import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  // ✅ patients state MUST be defined
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => {
      setPatients(res.data);
    });
  }, []);

 return (
  <div className="container">
    <div className="card">
      <div className="page-title">Dashboard</div>

      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Dashboard;