import React, { Component } from "react";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Collapse,
  CardBody,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
// icons
import homeBanner from "../resources/homepage banner edited.png";
import van from "../resources/van.png";
import svc1 from "../resources/Icons/Services Icons/Artboard 1home page icons.png";
import svc2 from "../resources/Icons/Services Icons/Artboard 3home page icons.png";
import svc3 from "../resources/Icons/Services Icons/Artboard 4home page icons.png";
import fbIcon from "../resources/fb icon.png";
import igIcon from "../resources/insta icon.png";
import didyouknow from "../resources/photos/did you know edited2.png";
import didyouknow2 from "../resources/photos/did you know 2 orig.png";
import logo from "../resources/Artboard 21xPNG.png";
import art1 from "../resources/Icons/Core Values Icons/art1.png";
import art2 from "../resources/Icons/Core Values Icons/art2.png";
import art3 from "../resources/Icons/Core Values Icons/art3.png";
import art4 from "../resources/Icons/Core Values Icons/art4.png";
import cleaning from "../resources/cleaning.png";
import illu1 from "../resources/Illustration/Artboard 12cartoon illustration.png";
import mapImg from "../resources/map.png";

class Home extends Component {
  componentDidMount() {
    document.getElementById("home").scrollIntoView();
  }

  render() {
    const bookModal = () => {
      return (
        <Modal
          isOpen={this.state?.book}
          toggle={() => this.setState({ book: !this.state?.book })}
        >
          <ModalHeader
            toggle={() => this.setState({ book: !this.state?.book })}
          >
            BOOK NOW
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Enter name here" />
              </FormGroup>
              <FormGroup>
                <Input type="email" placeholder="Enter email here" />
              </FormGroup>
              <FormGroup>
                <Input type="password" placeholder="Enter password here" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.setState({ book: !this.state?.book })}
            >
              BOOK NOW
            </Button>{" "}
            <Button
              color="secondary"
              onClick={() => this.setState({ book: !this.state?.book })}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      );
    };

    return (
      <div id="home">
        {bookModal()}
        <img
          src={homeBanner}
          alt=""
          width="100%"
          height="40%"
          className="mt-5"
        />
        <Card body className="text-center" inverse color="primary">
          <CardTitle>
            Your FIRST and BEST choice in making your airducts clean
          </CardTitle>
          <CardText>
            <Button
              color="light"
              className="text-primary"
              onClick={() => this.setState({ book: !this.state?.book })}
            >
              <b>BOOK NOW</b>
            </Button>
          </CardText>
        </Card>
        <br />
        <br />
        <center>
          <h1 className="text-primary">WELCOME</h1>
        </center>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              1st Choice Airduct Cleaning Service is an airduct cleaning company
              which offers Airduct Cleaning, Dry Vent Cleaning, and Chimney
              Cleaning. We hire only professional specialists and we make it
              sure that they are up-to-date on all new cleaning equipment and
              airduct designs.{" "}
            </Col>
            <Col>
              We treat customer requests and instructions with due respect and
              we strive to meet all of customer demands. We always bring our
              A-game and make sure you get your money's worth without wasting
              any precious time.
            </Col>
          </Row>
          <Row>
            <Col md>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Button
                color="primary"
                size="lg"
                onClick={() => this.setState({ book: !this.state?.book })}
              >
                BOOK NOW
              </Button>
            </Col>
            <Col md="10">
              <img
                className="d-none d-md-block"
                src={van}
                alt=""
                height="600px"
                width="100%"
              />
              <img
                className="d-md-none d-block"
                src={van}
                alt=""
                height="400px"
                width="100%"
              />
            </Col>
          </Row>
          <center>
            <p className="text-primary h1" id="services">
              SERVICES LIST
            </p>
            <hr />
            <br />
            <p className="font-weight-bold">
              1st Choice Airduct Cleaning Services offer the following services:{" "}
              <br />
              Airduct Cleaning, Dry Vent Cleaning, Chimney Cleaning.
            </p>
          </center>
          <Row className="text-center">
            <Col md>
              <Card
                body
                style={{ backgroundColor: "#CFE7FF", borderColor: "#CFE7FF" }}
              >
                <CardTitle>
                  <img src={svc1} alt="" width="100" height="100px" />
                </CardTitle>
                <CardText>
                  <p className="h5">AIR DUCT CLEANING</p>
                  <p>
                    Full and comprehensive airduct clean-up. Remove all clogs,
                    rodents, insects, microbes, and dust from your airducts.
                  </p>
                </CardText>
              </Card>
            </Col>
            <Col md>
              <Card
                body
                style={{ backgroundColor: "#CFE7FF", borderColor: "#CFE7FF" }}
              >
                <CardTitle>
                  <img src={svc2} alt="" width="100px" height="100px" />
                </CardTitle>
                <CardText>
                  <p className="h5">DRYER VENT CLEANING</p>
                  <p>
                    Full and comprehensive dry vent clean-up. Remove all clogs,
                    rodents, insects, microbes, and dust from your dry vents.
                  </p>
                </CardText>
              </Card>
            </Col>
            <Col md>
              <Card
                body
                style={{ backgroundColor: "#CFE7FF", borderColor: "#CFE7FF" }}
              >
                <CardTitle>
                  <img src={svc3} alt="" width="100px" height="100px" />
                </CardTitle>
                <CardText>
                  <p className="h5">CHIMNEY CLEANING</p>
                  <p>
                    Full and comprehensive chimney clean-up. Remove soots &
                    flues from your chimney. <br />
                    <br />
                  </p>
                </CardText>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <center>
            <p>
              Cancellations under 24 hours will incur a fee of <b>$30.00</b>{" "}
              <br />
              No one home fee for scheduled appointment <b>$60.00</b>
            </p>
            <br />
            <br />
            <br />
            <p className="h1 text-primary">Contact Us for Pricing</p>
            <br />
            <br />
          </center>
          <Row>
            <Col>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input type="text" id="message" placeholder="Message" />
                </FormGroup>
                <Button color="success">SEND</Button>
              </Form>
            </Col>
            <Col>
              <p>
                <b>Address:</b> ...{" "}
              </p>
              <p>
                <b>Email:</b> contactus@airduct-6d592.web.app{" "}
              </p>
              <p>
                <b>Phone:</b> (702) 919 - 4843{" "}
              </p>
              <br />
              <p>
                <b>Follow Us:</b>
                <br />
                <img src={fbIcon} alt="" width="100px" height="100px" />
                <img src={igIcon} alt="" width="100px" height="100px" />
              </p>
            </Col>
          </Row>
        </Container>
        <img id="didyouknow" src={didyouknow} alt="" width="100%" />
        <img src={didyouknow2} alt="" width="100%" />
        <br />
        <br />
        <Container>
          <center>
            <p className="h1 text-primary" id="about">
              ABOUT US
            </p>{" "}
            <hr />
            <img src={logo} alt="" width="100%" />
            <p>
              1st Choice Airduct Care specializes in cleaning airducts, chimneys
              and dry vents at homes and small businesses throughout the Las
              Vegas area. We have years of experience in cleaning airducts, and
              we do it with extreme care keeping in mind that these systems are
              vital in keeping you comfortable especially in Vegas’ desert
              climate. As a full-service cleaning provider, we’re able to offer
              everything you need to enjoy a safer, healthier and more
              comfortable indoor environment, including: <hr />
              <br />
              <br />- Professional airduct cleaning <br />
              <br />- Professional chimney cleaning <br />
              <br />- Professional dry vent cleaning
            </p>
            <p>
              <img src={art2} alt="" width="100px" height="100px" />
              <p className="h5 text-primary">Professional Service Specialist</p>
              <p>
                We make it a priority that our service specialists are
                well-trained and updated on the latest innovations in the
                equipment we use and the designs of the systems they would
                clean. Not only that, we also train our specialists to
                communicate with respect and enthusiasm to all customers they
                encounter.
              </p>
            </p>
            <p>
              <img src={art1} alt="" width="100px" height="100px" />
              <p className="h5 text-primary">Putting Our Customer First</p>
              <p>
                As they say, “Customers are always right”, so be assured that we
                will put your concerns and request first and foremost. We will
                only consider it mission accomplished if only you say so.
              </p>
            </p>
            <p>
              <img src={art4} alt="" width="100px" height="100px" />
              <p className="h5 text-primary">Efficient</p>
              <p>
                We make it sure that our services are worth your every buck. As
                they say, “Time is Gold”, and our company treat it as such.
                Delays are unacceptable so expect our specialists to be fifteen
                (30) minutes ahead of schedule.
              </p>
            </p>
            <p>
              <img src={art3} alt="" width="100px" height="100px" />
              <p className="h5 text-primary">Committed</p>
              <p>
                We do not take any booking for granted. Be it a simple
                residential house to a 12-room mansion, we always offer our
                A-game.
              </p>
            </p>
            <br /> <br />
            <p className="h4 text-primary">
              GOOD WORDS FROM OUR PREVIOUS SERVICE
            </p>
            <p>
              <b>JOHNNY DEPP</b>
              <p>
                "It was great lorem ipsum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
              </p>
            </p>
            <br />
            <br />
            <p className="h4 text-primary">SERVICES RENDERED</p>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <img src={cleaning} alt="" width="200px" height="150px" />
                    <p>
                      <b>Address</b>
                      <p>Las vegas</p>
                    </p>
                    <p>
                      <b>Service(s) Rendered</b>
                      <p>Air Duct Cleaning</p>
                    </p>
                  </Col>
                  <Col>
                    <img src={cleaning} alt="" width="200px" height="150px" />
                    <p>
                      <b>Address</b>
                      <p>Las vegas</p>
                      <p>
                        <b>Service(s) Rendered</b>
                        <p>Air Duct Cleaning</p>
                      </p>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={cleaning} alt="" width="200px" height="150px" />
                    <p>
                      <b>Address</b>
                      <p>Las vegas</p>
                      <p>
                        <b>Service(s) Rendered</b>
                        <p>Air Duct Cleaning</p>
                      </p>
                    </p>
                  </Col>
                  <Col>
                    <img src={cleaning} alt="" width="200px" height="150px" />
                    <p>
                      <b>Address</b>
                      <p>Las vegas</p>
                      <p>
                        <b>Service(s) Rendered</b>
                        <p>Air Duct Cleaning</p>
                      </p>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <img src={illu1} alt="" width="400px" height="400px" />
              </Col>
            </Row>
          </center>

          <p className="h2 text-primary text-center" id="faq">
            POLICIES AND FREQUENTLY <br /> ASKED QUESTIONS
          </p>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq1: !this.state?.faq1 })}>
              <span className="h4 text-primary">1.</span> How many times do I
              have to clean my airduct in a year?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq1}>
              <Card>
                <CardBody>FAQ 1</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq2: !this.state?.faq2 })}>
              <span className="h4 text-primary">2.</span> How many times do I
              have to clean my chimney in a year?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq2}>
              <Card>
                <CardBody>FAQ 2</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq3: !this.state?.faq3 })}>
              <span className="h4 text-primary">3.</span> How many times do I
              have to clean my dry vent in a year?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq3}>
              <Card>
                <CardBody>FAQ 3</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq4: !this.state?.faq4 })}>
              <span className="h4 text-primary">4.</span> What are antimicrobial
              chemicals and why would they need to be used?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq4}>
              <Card>
                <CardBody>FAQ 4</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq5: !this.state?.faq5 })}>
              <span className="h4 text-primary">5.</span> What are the normal
              price range for the airduct cleaning service?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq5}>
              <Card>
                <CardBody>FAQ 5</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq6: !this.state?.faq6 })}>
              <span className="h4 text-primary">6.</span> How can I determine if
              the HVAC system cleaning was effective?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq6}>
              <Card>
                <CardBody>FAQ 6</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq7: !this.state?.faq7 })}>
              <span className="h4 text-primary">7.</span> Will HVAC system
              cleaning reduce our home energy bills?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq7}>
              <Card>
                <CardBody>FAQ 7</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq8: !this.state?.faq8 })}>
              <span className="h4 text-primary">8.</span> Are there any health
              benefits that come from HVAC system cleaning?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq8}>
              <Card>
                <CardBody>FAQ 8</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq9: !this.state?.faq9 })}>
              <span className="h4 text-primary">9.</span> What criteria should I
              use when selecting and HVAC system cleaning contractor?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq9}>
              <Card>
                <CardBody>FAQ 9</CardBody>
              </Card>
            </Collapse>
          </div>
          <div>
            <hr />
            <span onClick={() => this.setState({ faq10: !this.state?.faq10 })}>
              <span className="h4 text-primary">10.</span> How should a
              residential HVAC system be cleaned?
            </span>
            <hr />
            <Collapse isOpen={this.state?.faq10}>
              <Card>
                <CardBody>FAQ 10</CardBody>
              </Card>
            </Collapse>
          </div>
          <br />
          <br />
          <br />
          <p className="h1 text-primary" id="contact">
            Contact Us for Pricing
          </p>
          <br />
          <br />
          <Row>
            <Col>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input type="text" id="message" placeholder="Message" />
                </FormGroup>
                <Button color="success">SEND</Button>
              </Form>
            </Col>
            <Col>
              <p>
                <b>Address:</b> ...{" "}
              </p>
              <p>
                <b>Email:</b> contactus@airduct-6d592.web.app{" "}
              </p>
              <p>
                <b>Phone:</b> (702) 919 - 4843{" "}
              </p>
              <br />
              <p>
                <b>Follow Us:</b>
                <br />
                <img src={fbIcon} alt="" width="100px" height="100px" />
                <img src={igIcon} alt="" width="100px" height="100px" />
              </p>
            </Col>
          </Row>
        </Container>
        <img src={mapImg} alt="" width="100%" />
        <Alert color="primary" className="bg-primary text-white text-center">
          2020 All Rights Reserved
        </Alert>
      </div>
    );
  }
}
export default Home;
