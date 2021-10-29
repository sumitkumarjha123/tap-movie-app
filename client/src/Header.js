/*const Header = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.appName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Browse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Header;
  */
  import { Navbar, Container, Nav } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  
  function Header() {
      return (
          <Navbar bg="dark" expand="lg" variant='dark'>
              <Container>
                  <Link to="/" className='navbar-brand'>Movies App</Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Link to="/" className="nav-link" active>Home</Link>
                          <Link to="/add-movie" className="nav-link">Add Movie</Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      )
  }
  
  export default Header;
  