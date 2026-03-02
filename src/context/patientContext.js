import { createContext, useState } from "react";

// Create Context
export const PatientContext = createContext();

// Provider Component
const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState(null);

  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;