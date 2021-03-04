import patients from '../../data/patients';


import { NonSensitivePetientEntry, Patient } from '../types'

const getEntries = () : Patient[] => {
  return patients
}

const getNonSensitiveEntries = (): NonSensitivePetientEntry [] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPetient = () => {
  return []
}

export default {
  getEntries,
  getNonSensitiveEntries,
  addPetient
}