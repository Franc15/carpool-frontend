import React, { Component } from 'react';

class RegisterDriver2 extends Component {
    state = {  } 
    render() { 
        return (
            <form>
                <div className='m-2'>
                    <h3 style={{textAlign:'center'}}>Register as Driver</h3>
                    <p style={{textAlign:'center'}}>Enter driver specific date</p>
                </div>

                <div className="m-2">
                    Upload Driver's Licence
                    <input type="file" className="form-control form-control-file" name="drivers_licence" />
                </div>

                <p className='m-2'>Car Information</p>

                <div className="m-2">
                    <input className="form-control" type="text" name="plates" placeholder="Plate number" />
                </div>

                <div className="m-2">
                    <input className="form-control" type="number" name="seats" placeholder="Number of Seats" />
                </div>

                <div className="m-2">
                    <select class="custom-select my-1 mr-sm-2" id="status" name="status">
                        <option selected>Choose...</option>
                        <option value="M">New</option>
                        <option value="F">Used</option>
                    </select>

                </div>
                <div className="m-2">
                    <select class="custom-select my-1 mr-sm-2" id="color" name="color">
                        <option selected>Choose...</option>
                        <option value="M">white</option>
                        <option value="F">black</option>
                    </select>
                </div>

                <div className="m-2">
                    <select class="custom-select my-1 mr-sm-2" id="model" name="model">
                        <option selected>Choose...</option>
                        <option value="M">Honda Fit</option>
                        <option value="F">Toyota</option>
                    </select>
                </div>
               
                
                <div className="m-2">
                    <input className="btn btn-block btn-primary btn-md" type="submit" value="REGISTER" />
                </div>
            </form>
        );
    }
}

 
export default RegisterDriver2;