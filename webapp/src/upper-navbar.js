import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

export function UpperNavbar() {
    const base = process.env.REACT_APP_BASE_URI;
    const baseImages = process.env.REACT_APP_BASE_IMAGES;

    const expand = "sm"

    return <>
        <Navbar key={expand} expand={expand} className="upper-navbar mb-3">
            <Container>
                <Navbar.Brand as={Link} to={base}>
                    <img
                        src={baseImages + "ts-logo-white.png"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {/*{' '}TilStat*/}
                </Navbar.Brand>

                <Nav className="d-none d-sm-flex justify-content-start pe-3">
                    <Link className="nav-link" to={base}>TilStat</Link>
                    <Link className="nav-link" to={base+"synoptic"}>Synoptic</Link>
                    <Link className="nav-link" to={base+"about"}>About</Link>
                </Nav>


                {/*<Nav className="d-sm-none text-center flex-grow-1 pe-3">*/}
                {/*    <Link className="nav-link" to={base}>TilStat</Link>*/}
                {/*</Nav>*/}

                <Nav className="d-sm-none text-center justify-content-center flex-grow-1 pe-3">
                    <NavDropdown title="TilStat" autoClose={true}>
                        <NavDropdown.Item as={Link} to={base}>Home</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={base+"synoptic"}>Synoptic</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={base+"about"}>About</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className="d-flex justify-content-end pe-3">
                    <Nav.Link href="https://github.com/rebuglio/tilstat-data" target="_blank">
                        <img src={baseImages + "github-mark-white.svg"} width={25} />
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    </>
}

