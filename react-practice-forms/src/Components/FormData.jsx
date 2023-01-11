import React from "react";

function FormComponent(){

    const [ FormDAta, SetFormDAta ] = React.useState(
        {
            FirstName : "",
            LastName : "",
            Email : "",
            Password : "",
            ConfirmPassword : "",
            DOB: ""
        }
    )

    function Submit(e){
        e.preventDefault()
    }


    function Change(e){

        const {FirstName, LastName, Email, Password, ConfirmPassword, DOB} = FormDAta

        SetFormDAta(
            (prev)=>{
                return{
                    ...prev,
                    [ e.target.name ] : e.target.value
                }
                 
            }
            
            )
            console.log(FormDAta)
    }
    return(

        <form onSubmit={Submit}>
            <h1>Lets Go!</h1>
            <input type='text' placeholder="First Name" name='FirstName' onChange={Change} required/>
            <input type='text' placeholder="Last Name" name='LastName' onChange={Change} required/>
            <input type='email' placeholder="Email Id" name='Email' onChange={Change} required/>
            <input type='text' placeholder="Password" name='Password' onChange={Change} required/>
            <input type='password' placeholder="Repeat Password" name='ConfirmPassword' required onChange={Change}/>
            <input type='date' placeholder="Date of Birth" name="DOB" required onChange={Change}/>
            <button>Sign Up</button>

        </form>
    )

}

export default FormComponent;