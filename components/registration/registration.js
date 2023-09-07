import React, {useEffect, useState} from 'react'
import classes from './registration.module.css'
import Button from '../ui/button'
import Registrationlist from './registration-list';
export default function Registration() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
  
    fetch('https://reqres.in/api/register')
      .then(response => response.json())
      .then((data) => {
        const nestedData = data.data; 
        setData(nestedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
    <main>
      <div className={classes.newregis}>
          <form className={classes.addregis} >
                <h2>Registration Form</h2>
                <div className={classes.content}>
                  <label htmlFor='name'>Name</label>
                  <input
                  type='text'
                  name='name'/>
                </div>
                <div className={classes.content}>
                  <label htmlFor='year'>Year</label>
                  <input
                  type='number'
                  name='year'/>
                </div>
                <div className={classes.content}>
                  <label htmlFor='color'>Color</label>
                  <p>Example : #055875</p>
                  <input
                  type='text'
                  name='color'/>
                </div>
                <div className={classes.content}>
                  <label htmlFor='pantone_value'>Pantone</label>
                  <input
                  type='text'
                  name="pantone_value"/>
                </div>
                <Button type='submit'>Registration</Button>
          </form> 
      </div>
    <Registrationlist data = {data} />  
    </main>
  );
}
