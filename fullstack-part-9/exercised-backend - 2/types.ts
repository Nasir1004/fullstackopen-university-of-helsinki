
export type NonSensitivePetientEntry = Omit<Patient , 'ssn' | "entries">;
export type NonSensitiveDiagonosetEntry = Omit<Diagnosis , 'latin'>;

export type NewPatient = Omit<Patient, 'id'>;

export interface Entry {

}

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}
 


export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry;
}
