import React, { useState } from 'react'
import Navigation from './Navigation'

const DeleteGit = () => {
    const [input,changeInput]=useState(
    {
        id:" "
    }
)
    const inputHandler =(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValues}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteGit