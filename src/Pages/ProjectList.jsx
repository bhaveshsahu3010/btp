import React from 'react'

function ProjectList() {
  return (
    <div className='Db custom-table'>
        <h1>Project List</h1>
        <br />
      <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Faculty name</th>
          <th>Faculty email</th>

          
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

export default ProjectList
