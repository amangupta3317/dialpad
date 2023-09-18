import React from "react";
import List2_Icon1 from "./List2_Icons/List2_Icon1";
import List2_Icon2 from "./List2_Icons/List2_Icon2";
import List2_Icon3 from "./List2_Icons/List2_Icon3";
import List2_Icon4 from "./List2_Icons/List2_Icon4";
import List2_Icon5 from "./List2_Icons/List2_Icon5";

function List_Pricingcard2() {
  return (
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        {/* Icon 1*/}
        <List2_Icon1></List2_Icon1>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 2*/}
        <List2_Icon2></List2_Icon2>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 3*/}
        <List2_Icon3></List2_Icon3>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 4*/}
        <List2_Icon4></List2_Icon4>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 5*/}
        <List2_Icon5></List2_Icon5>
      </li>
    </ul>
  );
}

export default List_Pricingcard2;
