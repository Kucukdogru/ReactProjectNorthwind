import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/chart">Sepete Git</Dropdown.Item>
          Sepete Git
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
