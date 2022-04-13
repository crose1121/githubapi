import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Details = () => {

    const [repoObj, setRepoObj] = useState({});
    const [licenseObj, setLicenseObj] = useState({})
    const [avatarUrl, setAvatarUrl] = useState("");

    const {orgName, repoName} = useParams();

    useEffect(()=>{
        axios.get(`https://api.github.com/repos/${orgName}/${repoName}`)
            .then(response=>{
                // console.log("Logging org name---->", orgName)
                // console.log("Logging repo name---->", repoName)
                // console.log("Logging response---->", response)
                // console.log("Logging response.data.owner.avatar_url---->", response.data.owner.avatar_url)
                // console.log("Logging response.data.license---->", response.data.license)
                setRepoObj(response.data)
                setAvatarUrl(response.data.owner.avatar_url)
                setLicenseObj(response.data.license)
            })
            .catch(err=>console.log("Error when trying to GET single repo---->", err))
    },[])

    return (
        <div>
            <h1>Repo Details</h1>
            <hr />
            <h5>Organization Name: {orgName}</h5>
            <h5>Repo Name: {repoName}</h5>
            <img src={avatarUrl} alt="" style={{width: "150px", height: "150px"}}/>
            <p>Watchers Count: {repoObj.watchers_count}</p>
            <p>Forks Count: {repoObj.forks_count}</p>
            <p>Open Issues Count: {repoObj.open_issues_count}</p>
            <br></br>
            <p><strong>License Information:</strong> </p>
            <hr />
            <p>License Key: <em>{licenseObj.key}</em></p>
            <p>License Name: <em>{licenseObj.name}</em></p>
            <p>SPDX Id: <em>{licenseObj.spdx_id}</em></p>
            <p>License URL: <a href={licenseObj.url}>{licenseObj.url}</a></p>
            <p>Node Id: <em>{licenseObj.node_id}</em></p>
        </div>
    );
};

export default Details;