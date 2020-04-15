import {
  Alert,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
} from "react-bootstrap";

import MyCarousel from "../components/MyCarousel";

// 可以使用 TypeScript definitions
import axios from "axios";

import "../style/style.scss";

function ApiTest() {
  // GET
  axios
    .get("https://api.github.com/users/johnson4932?id=123")
    .then(function (response) {
      // Success
      console.log(response.status);
      console.log(response.data);
    })
    .catch(function (error) {
      // Error
      console.log(error);

      // Error 的詳細資訊
      console.log(error.response);
    })
    .then(function () {
      console.log("always executed");
    });
}

const fullWidthStyle = {
  "maxWidth": "100%", 
  "paddingLeft": "0px", 
  "paddingRight": "0px"
};

export default function Index() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container style={fullWidthStyle}>
        <Carousel>
          <MyCarousel
            src="https://source.unsplash.com/random/800x400"
            alt="First slide"
            h3label="First slide label"
            pcontent="您好"
          />
          <MyCarousel
            src="https://source.unsplash.com/random/800x400"
            alt="Third slide"
            h3label="Second slide label"
            pcontent="不好"
          />
          <MyCarousel
            src="https://source.unsplash.com/random/800x400"
            alt="Third slide"
            h3label="Third slide label"
            pcontent="好不好"
          />
        </Carousel>
        <Button onClick={ApiTest}>GET</Button>
      </Container>
    </div>
  );
}
