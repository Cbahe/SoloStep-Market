import React from "react";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { ShoeList } from "./pages/ShoeList"

export const App = () => {
  return(
    <div>
      <ShoeList/>
      <SignIn/>
      <SignUp/>
    </div>
  );
};
 
