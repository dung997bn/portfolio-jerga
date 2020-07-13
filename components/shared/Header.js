import React, { Component, Fragment } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
class Header extends Component {
  state = { isOpen: false };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar
        className="port-navbar port-default absolute "
        color="transparent"
        dark
        expand="md"
      >
        <BsNavBrand />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              <LoginBtn />
            </NavItem>
            <NavItem className="port-navbar-item">
              <LogoutBtn />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const BsNavBrand = () => {
  return (
    <Link href="/">
      <a className="navbar-brand port-navbar-brand">Fillip Jerga</a>
    </Link>
  );
};

const LoginBtn = () => (
  <span className="nav-link port-navbar-link clickable">Login</span>
);
const LogoutBtn = () => (
  <span className="nav-link port-navbar-link clickable">Log out</span>
);

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link "> {title} </a>
    </Link>
  );
};

export default Header;
