import React from 'react'
import { NavLink } from 'react-router-dom'

function submit(props){
 
    // props.preventDefault();

console.log(props.input)

}



function signup() {

    return (

        <>

            <div className="form-div">

                <form className="form"  >
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account!</p>
                    {/* <r /> */}

                    <div className="input-group">

                        <input type="text" className="form-control" name="firstname" placeholder="Firstname" required="required" />
                    </div>
                    <div className="input-group">

                        <input type="text" className="form-control" name="lastname" placeholder="Lastname" required="required" />
                    </div>


                    <div className="input-group">

                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>


                    <div className="input-group">

                        <input type="integer" className="form-control" name="mobile" placeholder="Phone Number" required="required" />
                    </div>


                    <div className="input-group">

                        <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required" />
                    </div>


                    <div className="input-group">

                        <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                    </div>


                    <div className="input-group">

                        <input type="text" className="form-control" name="cpassword" placeholder="Confirm Password" required="required" />
                    </div>


                    <button type="submit" onClick={submit("ok")}>Sign Up</button>


                    <div className="text-center">Already have an account? <NavLink to="/my-app/signup">Login here</NavLink></div>
                </form>
            </div>
        </>


    )
}

export default signup
