import React from 'react'

const Table = ({data}) => {
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Profile</th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((user) => (
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.age}</td>
                    <td>{user.birthDate}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><img src={user.image} alt="" style={{width:"70px"}}/></td>
                </tr>
            ))



        }
        </tbody>
    </table>

    </div>
  )
}

export default Table