/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entry, Gender, NewPatient } from './types'

const toNewPatient = (object: any): NewPatient => {
    return {
      dateOfBirth:parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOcuppation(object.occupation),
      name: parseName(object.name),
      entries: parseEntries(object.entries)
    };
  };

const parseSsn = (ssn: any): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error('incorrect or missing ssn: ' + ssn)
    }
    return ssn
}

const isString = (text: any): text is string => {
    return typeof text === 'string'
}


const isDate = (dateOfBirth: string): boolean => {
    return Boolean(Date.parse(dateOfBirth));
};

const parseDate = (dateOfBirth: any): string => {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth ' + dateOfBirth);
    }
    return dateOfBirth
}


const parseOcuppation = (occupation: any): string => {
    if (!occupation || !isOccupation(occupation)) {
        throw new Error('incorrect or missing occupation: ' + occupation)
    }
    return occupation
}

const isOccupation = (text: any): text is string => {
    return typeof text === 'string'
}

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender)
    }
    return gender;
}

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };

 
const parseEntries = (entries: any): Entry => {
    if (!entries || !isEntries()) {
        throw new Error('Incorrect or missing gender: ' + entries)
    }
    return entries;
}

const isEntries = (): Entry => {
    return Object.values([])
  };

const parseName = (name: any): string => {
    if (!name || !isName(name)) {
        throw new Error('incorrect or missing name: ' + name)
    }
    return name
}

const isName = (text: any): text is string => {
    return typeof text === 'string'
}

export default toNewPatient