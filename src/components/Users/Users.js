import {React,useState,useEffect} from 'react'
import './style.css'
import Table from 'react-bootstrap/Table';
import { Link,  } from 'react-router-dom';

function Users() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div  className='mt-5 users '>
      {
   isLoading? 
   <div class="d-flex justify-content-center aline-center loading">
   <p className='ps-3 pe-3'>Loading...</p>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
 </div>
 : 
    <div className=' bg-white rounded '>
    <h3 className='table-heading'>users</h3>
      <div className='user-details'>
        <Table striped  hover variant="light" className='user-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
           userData?.map((item,index)=>( 
           <tr >
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td><Link to={item.website} target="_blank" style={{textDecoration:'none'}}>{item.website}</Link></td>
              <td><Link to={`/moredetails/${item.id}`} >More Details</Link></td>
            </tr>
            ))
            }
           
          </tbody>
        </Table>
      </div>
    </div>
   }
    </div>
  )
}

export default Users