import React from 'react';


export default function Form (){
    const [message, setMessage] = React.useState()
    const [formDAta, setFormData ] = React.useState(
        {
            FirstName : "",
            LastName : "",
            DOB : "",
            email : "",
            password : "",
            Confpassword : ""
        }
    )

        function Change(e){
            setFormData((prev)=>{
                return {
                    ...prev,
                    [e.target.name] : e.target.value
                }
            })
        }


    function Submit(e){
        e.preventDefault()

        // Check password Uniformity
        if (formDAta.password === formDAta.Confpassword){
            if(formDAta.password.length > 8){
                
            }else{
                setMessage(()=> 'Try with Password greater than 8')
            }
        }else{
            setMessage(()=> 'Password Not same')
        }
    }

    return (
        <form onSubmit={Submit} className='text-1xl'>
            <input 
            placeholder='First Name'
            value={formDAta.FirstName}
            onChange={Change}
            type='text'
            name="FirstName" 
            required           
            />

            <input 
            placeholder='Last Name'
            value={formDAta.LastName}
            type='text'
            name="LastName"
            onChange={Change}            
            />
            <input 
            placeholder='Date Of Birth'
            value={formDAta.DOB}
            type="date"
            name="DOB" 
            onChange={Change}
            required
            />

            <input 
            placeholder='Email id'
            value={formDAta.email}
            type='email'
            name="email"   
            onChange={Change}
            required         
            />
            
            <input 
            type='password' 
            placeholder='password'
            name="password"
            onChange={Change}
            value={formDAta.password}
            />

            <input 
            type='text' 
            placeholder='Repeat password'
            name="Confpassword"
            onChange={Change}
            value={formDAta.Confpassword}
            />

        <button className="text-1xl">Sign Up</button>
            <div id='msg'>{message}</div>
        </form>
        
    )
}
