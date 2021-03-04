
export type NonSensitivePetientEntry = Omit<Patient , 'ssn'>;
export type NonSensitiveDiagonosetEntry = Omit<Diagnosis , 'latin'>;


export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export type Gender = 
  "male" | "female" | "other";


export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}
