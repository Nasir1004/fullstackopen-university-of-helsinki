import React from 'react'
import axios from 'axios'
import  { useStateValue } from '../state'
import {Patient} from '../types'
import {apiBaseUrl} from '../constants'
import {useParams} from 'react-router-dom'


const PatientData: React.FC = () => {
    const [{ patients }, dispatch] = useStateValue();
    const { id } = useParams<{ id: string }>();
    React.useEffect(() => {
      const fetchPatientList = async () => {
        try {
          const { data: patientListFromApi } = await axios.get<Patient[]>(
            `${apiBaseUrl}/patients/${id}`
          );
          dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
        } catch (e) {
          console.error(e);
        }
      };
      fetchPatientList();
    }, [dispatch]);

    return(
        <div>
            {/* {Object.values(patients).find((patient: Patient) => (
            <h1 key={patient.id}>
                <p>{patient.name}</p>
                <p>{patient.ssn}</p>
                <p>{patient.occupation}</p>
            </h1>
            ))} */}
            nasir ABABA
        </div>
    )
}

export default PatientData