import { ChangeEvent, Dispatch } from "react";

export default interface ILoginPropsTypes {
  e: ChangeEvent<any>;
  values: {
    email: string;
    password: string;
  };
  setValues: Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
}
