import React from 'react'
import '../views/Main.css'
import axios from "axios"
import { useState } from 'react';
import { useHistory } from 'react-router-dom'


const Main = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        city: "",
        state: "",
        zip: null,
    })
    const [errors, setErrors] = useState({});
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const handleClick1 = () => {
        // 👇️ toggle
        setIsActive1(true);

    };
    const handleClick2 = () => {
        // 👇️ toggle
        setIsActive2(true);

    };


    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(form)
        axios.post("http://localhost:8000/api/submitted-form", form)
            .then(res => {
                console.log(res.data.results);
                history.push("/submitted-form")

            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })
    }


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {/* Begin of Wrapper */}
            <div className='wrapper'>
                {/* Begin Body */}
                <div className='body'>
                    {/* Begin Content Box */}
                    <div className="content">

                        {/* Begin Menu Pane */}
                        <div className="menu-box">
                            <div className='item'>
                                Header
                            </div>
                            <div className="item">
                                <p>Footer</p>
                            </div>
                            <div className="item" onClick={handleClick1}>
                                <p>Reset Button</p>
                            </div>
                            <div className="item" onClick={handleClick2}>
                                <p>Submit Button</p>
                            </div>
                        </div>
                        {/* End of Menu Pane */}

                        {/* Begin Form Pane */}
                        <div className="form-box">
                            <h3>Registration</h3>
                            <form action="" onSubmit={onSubmitHandler}>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="fname" placeholder='first name' onChange={onChangeHandler} />
                                <span className="alert-danger"> {errors.fname && errors.fname.message}</span>


                                <label htmlFor="fname">Last Name</label>
                                <input type="text" name="lname" placeholder='last name' onChange={onChangeHandler} />
                                <span className="alert-danger"> {errors.lname && errors.lname.message}</span>


                                <label htmlFor="fname">City</label>
                                <input type="text" name="city" placeholder='city' onChange={onChangeHandler} />
                                <span className="alert-danger"> {errors.city && errors.city.message}</span>

                                <label htmlFor="fname">State</label>
                                <input type="text" name="state" placeholder='state' onChange={onChangeHandler} />
                                <span className="alert-danger"> {errors.state && errors.state.message}</span>


                                <label htmlFor="fname">Zip Code</label>
                                <input type="number" name="zip" placeholder='zip' onChange={onChangeHandler} />
                                <span className="alert-danger"> {errors.zip && errors.zip.message}</span>

                                <div className="button-container">
                                    <button
                                        type="reset"
                                        className='block'
                                        style={{
                                            backgroundColor: isActive1 ? 'salmon' : '',
                                            color: isActive1 ? 'white' : '',
                                        }}
                                        onClick={() => window.location.reload(false)}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className='block'
                                        style={{
                                            backgroundColor: isActive2 ? 'black' : '',
                                            color: isActive2 ? 'white' : '',
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* End of Form Pane*/}

                    </div>
                    {/* End of Content Box */}

                </div>
                {/* End of Body */}

                {/* Begin Sidebar */}
                <div className="sidebar">
                    <p>sidebar</p>
                </div>
                {/* End Sidebar */}

            </div>
            {/* End of Wrapper */}
        </>
    )
}

export default Main