import React from 'react'
export default function Registrationlist({data}) {

  return (
    <div className='container'>
        <h2>List register user from endpoint API : 'https://reqres.in/api/register'</h2>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Pantone</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.year}</td>
                                    <td>{user.color}</td>
                                    <td>{user.pantone_value}</td>
                                </tr>
                            })
                        }
                    
                </tbody>
            </table>
        </div>
    </div>
    
  )
}
