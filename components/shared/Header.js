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
  constructor(props) {
    super(props);
  }
  state = { isOpen: false };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { user, loading } = this.props;
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
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && (
                  <NavItem className="port-navbar-item">
                    <LogoutBtn />
                  </NavItem>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginBtn />
                  </NavItem>
                )}
              </>
            )}
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
  <a className="nav-link port-navbar-link clickable" href="/api/v1/login">
    Login
  </a>
);
const LogoutBtn = () => (
  <a className="nav-link port-navbar-link clickable" href="/api/v1/logout">
    Logout
  </a>
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
