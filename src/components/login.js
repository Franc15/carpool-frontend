import React, { Component } from 'react';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <form>
                <div className="m-2">
                    <input className="form-control" type="text" name="name" placeholder="Username" />
                </div>
                <div className="m-2">
                    <input className="form-control" type="password" name="password" placeholder="Password" />
                </div>
                <div className="m-2">
                    <input className="btn btn-block btn-primary btn-md" type="submit" value="LOG IN" />
                </div>
                
            </form>
        );
    }
}
 
export default Login;