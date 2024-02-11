import {React,useState,useEffect} from 'react'
import './style.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const location =useNavigate()
  const viewAll=()=>{
    location('/user')
  }
    const [userData, setUserData] = useState(null);
    const filter=userData?.map(item=>item).slice(0,4)
    // console.log(isLoading);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } 
      };
  
      fetchData();
    }, []);
  
  return (
    <div className='home mt-5'>
        <div className='carousel container'>
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/V5Qjq5xr/user-mngmnt1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>User Management</h5>
<p className='' >Welcome users to your user management websit.Briefly introduce the purpose of the website.</p>     
     <Button onClick={viewAll}>View all Users</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/mr9hMRYJ/user-management2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>User Profile Overview</h5>
          <p>Show a snapshot of a user profile retrieved from the API.
Display key details such as name, email, and profile picture (if available)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/pVQ4cmnc/user-management5.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5> User Preferences</h5>
          <p>
          Highlight the section where users can set their preferences
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='card-content'>

<Row className='card-row container '>
        {
          filter?.map(item=>(
            <Col xs={6} md={3} className=' '>
        <Card className='cards'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.username}</Card.Subtitle>
        <Card.Text >
        <p >Web site: {item.website}</p>
        <p >phone : {item.phone}</p>
        <p >Email : {item.email}</p>
        </Card.Text>
        <Link to={`/moredetails/${item.id}`}>View More</Link>

      </Card.Body>
    </Card>
        </Col>  
          ))
          }    
      </Row>

        </div>
        <div className='about'>
          <Container>
          <h3 >ABOUT US</h3>

            <div className='about-content'>
              <div className='left'></div>
              <div className='right'>
                <p >ABOUT US</p>
                <p >User-Nest Data Management</p>
                <p >Empowering users through detailed management. Our project focuses solely on providing comprehensive user details for a tailored experience.</p>
              </div>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default Home