import patients from '../../data/patients';
import { NonSensitivePetientEntry, Patient, NewPatient } from '../types'
import { v4 as uuidv4 } from 'uuid';

const getEntries = () : Patient[] => {
  return patients
}

const getNonSensitiveEntries = (): NonSensitivePetientEntry [] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const finById = (id: string): Patient | undefined => {
  const entry = patients.find(d => d.id === id);
  return entry
};

const addPetient = (patient: NewPatient ): Patient => {
  const newPatient = {
    id: uuidv4(),
     ...patient

  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPetient,
  finById
}