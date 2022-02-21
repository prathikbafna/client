/*import React from "react";
import { Child2 } from "./Child2";

export const Child = () => {
  return (
    <div>
      Child
      <Child2></Child2>
    </div>
  );
};
*/
import React from "react";
import { Child2 } from "./Child2";

export const Child = (props) => {
  const { name, lastName } = props.data;
  return (
    <div>
      {name} Child
      <Child2></Child2>
    </div>
  );
};
