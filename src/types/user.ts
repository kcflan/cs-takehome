export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  role: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
  friendIds: number[];
}

export interface UserSummary {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  company: string;
}

// A full user profile plus the resolved friend list, as returned by the detail endpoint.
export interface UserDetail extends User {
  friends: UserSummary[];
}
