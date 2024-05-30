import { Input } from "@material-tailwind/react";
import React from "react";

function Inpt({ className, ...props }) {
  return (
    <Input
      className={`${
        className || ""
      } placeholder:opacity-40`}
      containerProps={{className:"h-11"}}
      size="md"
      variant="outlined"
      color="orange"
      {...props}
    />
  );
}

export default Inpt;
