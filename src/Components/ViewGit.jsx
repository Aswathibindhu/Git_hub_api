import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewGit = () => {
    const [isloading, changeLoading] = useState(true)
    const [gitData, changeData] = useState(
        [

        ]
    )
    const FetchData = () => {
        axios.get(" https://api.github.com/users ").then(
            (response) => {
                changeLoading(false)
                changeData(response.data)
            }
        ).catch
        (
            (error)=>{
                    alert("Something Wrong"+error)
            }
        )
    }
    useEffect(() => { FetchData() }, [])
    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">login</th>
                                            <th scope="col">id</th>
                                            <th scope="col">node_id</th>
                                            <th scope="col">avatar_url</th>
                                            <th scope="col">gravatar_id</th>
                                            <th scope="col">html_url</th>
                                            <th scope="col">followers_url</th>
                                            <th scope="col">gists_url</th>
                                            <th scope="col">subscriptions_url</th>
                                            <th scope="col">organizations_url</th>
                                            <th scope="col">site_admin</th>
                                        </tr>
                                    </thead>
                                    {isloading ? (<div class="spinner-grow" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>) : <tbody>
                                        {gitData.map(
                                            (value, index) => {
                                                return (
                                                    <tr>

                                                        <td>{value.id}</td>
                                                        <td>{value.node_id}</td>
                                                        <td><img className= "rounded-circle" src={value.avatar_url} height={50} width={50}/></td>
                                                        <td>{value.gravatar_id}</td>
                                                        <td>{value.html_url}</td>
                                                        <td>{value.followers_url}</td>
                                                        <td>{value.following_url}</td>
                                                        <td>{value.gists_url}</td>
                                                        <td>{value.starred_url}</td>
                                                        <td>{value.organizations_url}</td>
                                                        <td>{value.site_admin ? <p className="text-success">true</p> : <p className='text-danger'>false</p>}</td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewGit