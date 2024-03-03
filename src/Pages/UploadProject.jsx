import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function UploadProject() {
    const [ProjectName, setProjectName] = useState("")
    // console.log(ProjectName)
    const [ProjectDesc, setProjectDesc] = useState("")
    const [ProjectStrength, setProjectStrength] = useState()
    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/dashboard/faculty')
    }
    return (
        <div className='upload Db'>
            <div>
                <span className='sp'>Enter Project Name:</span>
                <input type="text" value={ProjectName} onChange={(e) => setProjectName(e.target.value)} placeholder='Type Project Name' />
            </div>
            <div>
            <span className='sp'>Enter Project Description:</span>
                <textarea value={ProjectDesc} onChange={(e) => setProjectDesc(e.target.value)} placeholder='Type Project Description'x />
            </div>
            <div>
            <span className='sp'>Enter Project Strength:</span>
                <input type="text" value={ProjectStrength} onChange={(e) => setProjectStrength(e.target.value)} placeholder='0' />
            </div>

            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UploadProject
