import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanitySetup";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavigationBar.css"


function NavigationBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [poster, setPoster] = useState([]);

  useEffect(() => {
    const query = '*[_type == "logo_poster"]';

    client.fetch(query).then((data) => {
      setPoster(data);
    });
  }, []);

  return (
    <div>
      <div>
        <Navbar {...args} style={{ backgroundColor: "black" }}>
          <NavbarBrand
            href="/"
            className="navbarBrand"
            style={{ color: "whitesmoke", fontfamily: 'Merienda', width: "120px", height: "50px"}}
          >
            {poster.map((logo) => (
              
            <img src={urlFor(logo.brandImage)} alt="Extrovert" />
            
            ))}
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            style={{ backgroundColor: "whitesmoke" }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/allProducts" style={{ color: "whitesmoke", fontFamily: "revert" }}>
                  All Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/aboutUs"
                  style={{ color: "whitesmoke", fontFamily: "revert" }}
                >
                  About US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contactUs"
                  style={{ color: "whitesmoke", fontFamily: "revert" }}
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/policies"
                  style={{ color: "whitesmoke", fontFamily: "revert" }}
                >
                  Our Policies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/terms&conditions"
                  style={{ color: "whitesmoke", fontFamily: "revert" }}
                >
                  Terms and Conditions
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationBar;
