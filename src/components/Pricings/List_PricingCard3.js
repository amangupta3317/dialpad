import React from "react";
import List3_Icon1 from "./List3_Icons/List3_Icon1";
import List3_Icon2 from "./List3_Icons/List3_Icon2";
import List3_Icon3 from "./List3_Icons/List3_Icon3";
import List3_Icon4 from "./List3_Icons/List3_Icon4";
import List3_Icon5 from "./List3_Icons/List3_Icon5";

function List_PricingCard3() {
  return (
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        {/* Icon 1*/}
        <List3_Icon1></List3_Icon1>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 2*/}
        <List3_Icon2></List3_Icon2>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 3*/}
        <List3_Icon3></List3_Icon3>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 4*/}
        <List3_Icon4></List3_Icon4>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 5*/}
        <List3_Icon5></List3_Icon5>
      </li>
    </ul>
  );
}

export default List_PricingCard3;
