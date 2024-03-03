import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard1() {
  return (
    <div className='Db'>
      <h1>Hi User</h1>
      <div className='upload_project'>
        <Link to="/uploadProject"></Link>
      </div>
      <div className='see_student_list'></div>
    </div>
  )
}

export default Dashboard1
