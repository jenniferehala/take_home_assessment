import React, { useEffect, useState } from 'react';
import axios from "axios"
import '../views/Main.css'



const Results = () => {
    const [results, setResults] = useState([])
    //useState empty array to start with

    useEffect(() => {
        axios.get("http://localhost:8000/api/submitted-form-results")
            .then(res => {
                console.log(res.data.results);
                setResults(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="wrapper">
            <div className="body">
                <div>
                    <h1>Results Page</h1>
                    <h2>Registration info</h2>
                    <div className='w-75 mx-auto'>
                        {
                            results?.map((item, i) => {
                                return <ul>
                                    <li>First Name: {item.fname}</li>
                                    <li>Last Name: {item.lname}</li>
                                    <li>City: {item.city}</li>
                                    <li>State: {item.state}</li>
                                    <li>Zip Code: {item.zip}</li>
                                </ul>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results