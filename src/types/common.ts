export type TProfile =
  | 'birthday'
  | 'website'
  | 'phone'
  | 'address'
  | 'age'
  | 'degree'
  | 'email'
  | 'freelance';

export interface IProfile {
  birthday?: string;
  website?: string;
  phone?: string;
  address?: string;
  age?: number;
  degree?: string;
  email?: string;
  freelance?: string;
}

export interface ISkill {
  name: string;
  rate: number;
}

export interface INav {
  handleNavClick: () => void;
}
