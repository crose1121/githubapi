import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';


const Repos = ({newSubmit}) => {

    const [orgName, setOrgName] = useState("");
    const [orgDetails, setOrgDetails] = useState([]);

    const {name} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get(`https://api.github.com/orgs/${name}/repos`)
            .then(response=>{
                console.log("Logging GET Response----->", response)
                setOrgName(name);
                setOrgDetails(response.data);
                console.log("Logging Org Details---->", orgDetails)
            })
            .catch(err=>{
                console.log("This was an invalid search", err)
                history.push("/error")
            })
    },[newSubmit])
    
    return (
        <div>

            <h1>Organization Name: {orgName}</h1>
            {
                orgDetails.map((repo, i)=>{
                    return(
                        <div key={i}>
                            <Link to={`/repos/${orgName}/${repo.name}`}>Repo Name#: {repo.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Repos;