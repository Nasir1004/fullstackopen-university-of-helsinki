import diagnose from '../../data/diagnoses';


import { NonSensitiveDiagonosetEntry, Diagnosis } from '../types'

const getEntries = () : Diagnosis [] => {
  return diagnose
}

const getNonSensitiveEntries = (): NonSensitiveDiagonosetEntry [] => {
  return diagnose.map(({code, name, }) => ({
    code,
    name,
    
 }));
};



export default {
  getEntries,
  getNonSensitiveEntries,
}