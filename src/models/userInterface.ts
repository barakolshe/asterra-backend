import Hobby from "./hobbyInterface";

export default interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone_number?: string;
  hobbies?: string;
}
