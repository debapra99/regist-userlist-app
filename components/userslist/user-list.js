import React, {useState, useEffect} from 'react'
import classes from './user-list.module.css'
import UserItem from './user-item'

export default function UserList() {
    
    const [data, setData] = useState([])
      useEffect(() => {
        
        fetch('https://reqres.in/api/users')
          .then(response => response.json())
          .then(data => {
            const dataArray = data.data; 
            setData(dataArray); 
            console.log(dataArray)
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []); 

      useEffect(() => {
        fetch
      })

      return(
        <ul className={classes.list}>
            <UserItem data = {data}/>
        </ul>
      )
}
 