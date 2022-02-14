import React, { useState } from "react";

function Demo2(){
    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const {email, password } = user;

    const handelChange=(event)=>{
        let {name,value}  = event.target;
        setUser({...user,[name]:value});
    }

    const handelSubmit=(event)=>{
        event.preventDefault();
        const user = "Email " + email +" Password "+ password ;
        console.log(user);
    }
    return(
        <div>
            <form onSubmit={handelSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={email}  onChange={handelChange}/>
                <br></br>
                <br></br>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handelChange} />
                <br></br>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Demo2;