import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {



    

    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift me-2 mb-1" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg>GiftAway</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home |</Nav.Link>
                        <Nav.Link href="/register">Register |</Nav.Link>
                        <Nav.Link href="/login">Login |</Nav.Link>
                        <Nav.Link href="/giftaway">Manage Own Giftaways</Nav.Link>
                    </Nav>
                    <Form className="d-flex mb-3 mt-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <NavDropdown title="Categories" id="navbarScrollingDropdown" className="me-2">
                            <NavDropdown.Item href="#action3">All</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Antiques / Art
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Books / Music
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Camera
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Child
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Computer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Fashion / Accessories
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Gaming
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Garden / Workshop
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Household
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Jewelry
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Leisure / Instruments
                            </NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action4">
                                Pet Supplies
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                (Smart)Phone
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Sport
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Toys
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Wellbeing
                            </NavDropdown.Item>                           
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">
                                Other
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;