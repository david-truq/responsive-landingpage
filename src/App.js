import './App.css';
import {Navbar, Nav, NavDropdown, Container, Row, Col, Image, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header>
         <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
          <Container>
           <Navbar.Brand href="#home">Anime-land</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Hit Us Up</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Recommendations</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Merch
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Upcoming Events</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                 Hit Us Up
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
      </header>

     <main>
      <Container>
        <Row className='px-4 my-5'>
        <Col sm={7}><Image src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Eren-Cut-Hand-Header.jpg" fluid rounded className='' /></Col>
        <Col sm={5}>
          <h1 class='font-weigh-light'>Anime-land</h1>
          <p class="mt-4"> The home of Anime, we do cool sturvs here. Whatever you need, be it recommendatioss, genre classifications, merch, anime fan battle, events and so on and so forth.
          check us out on instagram and tik-tok, linkedIn too (why not, this is serious business) #PlusUltra.</p>
          <Button variant="outline-secondary">Hit Us Up</Button>
        </Col>
        </Row>

        <Row>
        <Card className='text-white bg-secondary text-center my-4 py-2'>
          <Card.Body>
            Quick question though, what's your favourite anime?? Asides the big three of course, whatever that is to you lol. But let us know when you hit us up.
          </Card.Body>
        </Card>
        </Row>

        <Row>
         <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://staticg.sportskeeda.com/editor/2022/07/a3300-16582302931133.png?w=840" />
            <Card.Body>
              <Card.Title>Minato Uzumuki</Card.Title>
              <Card.Text>
                One of the greatest charaters in the Naruto verse, he was also known as the yellow flash asper  his teleportation.
              </Card.Text>
              <Button variant="primary">Get his merch</Button>
            </Card.Body>
          </Card>
         </Col>

         <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://64.media.tumblr.com/4d3d60a85fca9f042bd5ac3fe2d1a2af/3499024f3092e7dc-74/s1280x1920/9a838d062eeb4d68aeb36bba8f46b08ef049da81.jpg" />
            <Card.Body>
              <Card.Title>Benimaru</Card.Title>
              <Card.Text>
               One of the coldest anime character ever. He's probably in the top two strongest in his verse.
              </Card.Text>
              <Button variant="primary">Get his merch</Button>
            </Card.Body>
          </Card>
         </Col>

         <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://butwhytho.net/wp-content/uploads/2023/07/Toji-Fushiguro-But-Why-Tho-1.jpg" />
            <Card.Body>
              <Card.Title>Toji</Card.Title>
              <Card.Text>
                Bro this is the most "i don't care character" i've seen, cares only about his job though. Bro is menacing lmao
              </Card.Text>
              <Button variant="primary">Get his merch</Button>
            </Card.Body>
          </Card>
         </Col>
        </Row>

      </Container>
     </main>

     <footer class='py-2 mt-5 bg-dark'>
      <Container className='px-4'>
        <p class='text-center text-white'>Copyright &copy; Anime-land 2023</p>
      </Container>
     </footer>
    </div>
  );
}

export default App;
