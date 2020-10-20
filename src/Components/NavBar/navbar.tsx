import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark"  expand="md">
        <NavbarBrand href="/">react-apolo-test</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/ruiru11">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComponent;
