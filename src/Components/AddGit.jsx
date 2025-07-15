import React, { useState } from 'react'
import Navigation from './Navigation'

const AddGit = () => {
    const [input,changeInput]=useState(
        {
            Id:" ",NodeId:" ",avatar_url:" ",gravatar_url:" ",url:" ",html_url:" ",followers_url:" ",following_url:" ",gists_url:" ",starred_url:" ",subscriptions_url:" ",organizations_url:" ",repos_url:" ",events_url:" ",recievde_events_url:" ",type:" ",user_view_type:" "
        }
    )
    const inputHandler=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }
    const readValues =()=>{
        console.log(input)
    }
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='Id'value={input.Id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Nodeid</label>
                            <input type="text" className="form-control"name='Nodeid' value={input.NodeId} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">avatar_url</label>
                            <input type="text" className="form-control" name='avatar_url' value={input.avatar_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gravatar_url</label>
                            <input type="text" className="form-control" name='gravatar_url' value={input.gravatar_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">url</label>
                            <input type="text" className="form-control"name='url' value={input.type} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">html_url</label>
                            <input type="text" className="form-control" name='html_url' value={input.html_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">followers_url</label>
                            <input type="text" className="form-control" name='followers_url' value={input.followers_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">following_url</label>
                            <input type="text" className="form-control" name='following_url' value={input.following_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gists_url</label>
                            <input type="text" className="form-control" name='gists_url' value={input.gists_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">starred_url</label>
                            <input type="text" className="form-control" name='starred_url' value={input.starred_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">subscriptions_url</label>
                            <input type="text" className="form-control" name='subscriptions_url' value={input.subscriptions_url} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">organizations_url</label>
                            <input type="text" className="form-control" name='organizations_url' value={input.organizations_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">repos_url</label>
                            <input type="text" className="form-control" name='repos_url' value={input.repos_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">events_url</label>
                            <input type="text" className="form-control" name='events_url' value={input.events_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">recievde_events_url</label>
                            <input type="text" className="form-control" name='recievde_events_url'value={input.recievde_events_url} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">type</label>
                            <input type="text" className="form-control" name='type' value={input.type} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">user_view_type</label>
                            <input type="text" className="form-control" name='user_view_type' value={input.user_view_type} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                            <button className="btn btn-success " onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddGit