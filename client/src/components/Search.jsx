import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const Search = ({newSubmit, setNewSubmit}) => { 
    
    const [orgName, setOrgName] = useState("");
    const history = useHistory();

    const submitHandler = (e) => {
        if (orgName==="") {
            e.preventDefault();
            setNewSubmit(!newSubmit)
            history.push("/error")
        } else {
            e.preventDefault();
            setNewSubmit(!newSubmit)
            history.push(`/search/${orgName}`)
            setOrgName("");
        }
    }

    return (
        <div className='mt-5'>
            <h3>Search for an Organization on GitHub</h3>
            <br /><br />
            <form action="" onSubmit={submitHandler}>

                <div className="form-group">
                    <label htmlFor="">Organization Name</label>
                    <input type="text" className="form-control" placeholder='Organization Name' value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>
                </div>
                <br /><br />

                <input type="submit" value="Search" className="btn btn-info" />
            </form>
            <hr /><br />
        </div>
    );
};



export default Search;