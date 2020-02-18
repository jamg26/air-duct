import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faQuestion,
  faPoll,
  faQuestionCircle,
  faPhone,
  faSignature,
  faSignInAlt,
  faHome
} from "@fortawesome/free-solid-svg-icons";

export default class Navigation extends Component {
  state = { toggle: false };

  render() {
    const navStyle = {
      fontSize: "18px"
    };
    return (
      <div id="navigation">
        <Modal
          isOpen={this.state?.login}
          toggle={() => this.setState({ login: !this.state?.login })}
        >
          <ModalHeader
            toggle={() => this.setState({ login: !this.state?.login })}
          >
            SIGN IN
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="email" placeholder="Enter email here" />
              </FormGroup>{" "}
              <FormGroup>
                <Input type="password" placeholder="Enter password here" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.setState({ login: !this.state?.login })}
            >
              SIGN IN
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => this.setState({ login: !this.state?.login })}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state?.signup}
          toggle={() => this.setState({ signup: !this.state?.signup })}
        >
          <ModalHeader
            toggle={() => this.setState({ signup: !this.state?.signup })}
          >
            SIGN UP
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="email" placeholder="Enter email here" />
              </FormGroup>{" "}
              <FormGroup>
                <Input type="password" placeholder="Enter password here" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.setState({ signup: !this.state?.signup })}
            >
              SIGN UP
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => this.setState({ signup: !this.state?.signup })}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Navbar color="white" light expand="md" style={navStyle}>
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarToggler
            onClick={() => this.setState({ toggle: !this.state.toggle })}
          />
          <Collapse isOpen={this.state.toggle} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#home" className="text-primary">
                  <FontAwesomeIcon icon={faHome} /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" className="text-primary">
                  <FontAwesomeIcon icon={faMoneyBill} /> Services & Prices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#didyouknow" className="text-primary">
                  <FontAwesomeIcon icon={faQuestion} /> Did you know?
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className="text-primary">
                  <FontAwesomeIcon icon={faPoll} /> About Us
                </NavLink>
              </NavItem>
              <hr />
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink href="#faq" className="text-primary">
                  <FontAwesomeIcon icon={faQuestionCircle} /> FAQs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="text-primary">
                  <FontAwesomeIcon icon={faPhone} /> Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  onClick={() => this.setState({ signup: !this.state?.signup })}
                  color="success"
                  className="mr-2 d-md-block d-none"
                >
                  SIGN UP
                </Button>
                <NavLink
                  href="#"
                  onClick={() => this.setState({ signup: !this.state?.signup })}
                  color="success"
                  className="mr-2 d-block d-md-none text-primary"
                >
                  <FontAwesomeIcon icon={faSignature} /> SIGN UP
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  onClick={() => this.setState({ login: !this.state?.login })}
                  color="danger"
                  className="mr-2 d-md-block d-none"
                >
                  SIGN IN
                </Button>
                <NavLink
                  href="#"
                  onClick={() => this.setState({ login: !this.state?.login })}
                  color="link"
                  className="mr-2 d-block d-md-none text-primary"
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> SIGN IN
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <Button color="primary">BECOME AN AFFILIATE</Button>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
