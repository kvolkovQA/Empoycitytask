export interface BaseFieldsData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobile: string;
    dateofbirth: string;
    subjects: string;
    hobbies: ('Sports' | 'Reading' | 'Music')[];
    pictures: string;
    currentaddress: string;
  }

  export type LocationFields =
  | { state: 'NCR'; city: 'Delhi' | 'Gurgaon' | 'Noida' }
  | { state: 'Uttar Pradesh'; city: 'Agra' | 'Lucknow' | 'Merrut' }
  | { state: 'Haryana'; city: 'Karnal' | 'Panipat' }
  | { state: 'Rajasthan'; city: 'Jaipur' | 'Jaiselmer' };

  export interface RequiredFieldsData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobile: string;
  }

  export interface PartialRequiredFieldsData {
    lastName: string;
    email: string;
    gender: string;
  }

export type AllFieldsData = BaseFieldsData & LocationFields;
export type FlexibleFormData = AllFieldsData | RequiredFieldsData | PartialRequiredFieldsData;