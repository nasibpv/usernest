import {React,useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './style.css'
import {  Button, Table } from 'react-bootstrap';

function MoreDetails() {
  const params=useParams()
    const increment=Number(params.id)+1
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location=useNavigate()
    const filters=userData?.filter(item=>item?.id==params.id)
    const add=userData?.filter(item=>item?.id==params.id).map(item=>item.address)
    const numberOfIds=userData?.map((item,i,arr)=>{
      if(arr.length - 1==i){
        
        return arr.length
      }
      else{
        
      }
    })
    const close=()=>{
      location(-1)
    }
  
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
    },[])
  return (
    <div>
         {
          isLoading?
          <div class="d-flex justify-content-center aline-center loading ">
   <p className='ps-3 pe-3'>Loading...</p>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
 </div> :
 <div className='more-details mt-5 p-2 bg-light'>
  <div className='close-button container'>
    <Button className='p-1 ps-3 pe-3' onClick={close}> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
</Button>
  </div>
             <div className='container  bg-white rounded p-3 mt-3 '>
              {
                filters?.map((item)=>(
                  <div className='content'>
                   <h4 >Name : {item.name}</h4>
                   <p >User Name : {item.username}</p>
                  
                   {
                    add?.map(item=>(
                      <p > Address : {item.street}, {item.city}</p>
                    ))
                   }
                  <p >Phone Number : {item.phone}</p>
                  <p >Emai : {item.email}</p>
                  <p >Web Site : <Link to={item.website}>{item.website}</Link></p>
                  </div>
                ))
               
              }
             </div>
             <div className='pagination container p-2 bg-white mt-5'>
              <Table borded className='pagination-table'>
                <tr className='borded'>
                  <td><Link to={`/moredetails/${params.id-1}`} style={{display:params?.id==1?"none":"block",border:'2px solid'}}>back</Link></td>
                    <td className='pages'><Link to={`/moredetails/${params.id-1}`} style={{display:params.id==1?"none":"block"}}>{params.id-1}</Link></td>
                    <td className='pages'><Link to={`/moredetails/${params.id}`} style={{backgroundColor:"blue"}}>{params?.id}</Link></td>
                    <td className='pages'><Link to={`/moredetails/${increment}`}  style={{display:params?.id==numberOfIds?.length?"none":"block"}}>{increment}</Link></td>
                  <td><Link to={`/moredetails/${increment}`} style={{display:params?.id==numberOfIds?.length?"none":"block",border:'2px solid'}}>nest</Link></td>
                </tr>
               
               
              </Table>
             
             </div>
         </div>
         }

    </div>
  )
}

export default MoreDetails