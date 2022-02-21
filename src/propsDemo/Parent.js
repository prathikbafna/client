// import React from "react";
// import Child from "./Child";

// import PropTypes from "prop-types";

// const Parent = (props) => {
//   //{ name, lastname }
//   return (
//     <div>
//       Parent {props.name} {props.lastname}
//       <Child lastname={props.lastname} name="abhinandan"></Child>
//     </div>
//   );
// };

// export default Parent;
import React from "react";
import { Child } from "./Child";

import PropTypes from "prop-types";

const Parent = (props) => {
  //{ name, lastname }
  return (
    <div>
      Parent {props.name} {props.lastname} 10 20
      <Child data={props}></Child>
    </div>
  );
};

export default Parent;
