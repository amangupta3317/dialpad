import React from "react";
import List1_Icon1 from "./List1_Icons/List1_Icon1";
import List1_Icon2 from "./List1_Icons/List1_Icon2";
import List1_Icon3 from "./List1_Icons/List1_Icon3";
import List1_Icon4 from "./List1_Icons/List1_Icon4";
import List1_Icon5 from "./List1_Icons/List1_Icon5";

function List_PricingCard1() {
  return (
    <ul role="list" className="mb-8 space-y-4 text-left">
      <li className="flex items-center space-x-3">
        {/* Icon 1*/}
        <List1_Icon1></List1_Icon1>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 2*/}
        <List1_Icon2></List1_Icon2>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon3 */}
        <List1_Icon3></List1_Icon3>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 4*/}
        <List1_Icon4></List1_Icon4>
      </li>
      <li className="flex items-center space-x-3">
        {/* Icon 5*/}
        <List1_Icon5></List1_Icon5>
      </li>
    </ul>
  );
}

export default List_PricingCard1;
