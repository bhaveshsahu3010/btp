import React from 'react'

function StudentList() {
  return (
    <div className='Db custom-table'>
      <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Student Name</th>
          <th>Student id</th>
          <th>Student email</th>
          <th>CGPA</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>jane@example.com</td>
        </tr>
        <tr>
          <td>Bob Johnson</td>
          <td>40</td>
          <td>bob@example.com</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default StudentList
