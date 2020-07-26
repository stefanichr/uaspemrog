import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLogin = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="light" expand="md">
        <NavbarBrand href="/"><img height="70px" width="70px" src={ require("../../logojy1.jpeg") } />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink href="/produk">Produk</NavLink>
            </NavItem>
          </Nav>
            <NavLink isLogin={isLogin} href="/login">Login</NavLink>

        </Collapse>
      </Navbar>
        </div>
    )
}

export default NavbarComp;
