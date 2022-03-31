import React, { Component } from 'react';

class PassengerDashboard extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h3 className='m-2'>Current Location</h3>
                <div className="m-2">
                    <select class="custom-select my-1 mr-sm-2" id="currentLocation" name="currentLocation">
                        <option selected>Select Current Location</option>
                        <option value="ALC">African Leadership Campus</option>
                        <option value="Port Louis">Port Louis</option>
                    </select>
                </div>
                <h3 className='m-2'>Destination</h3>
                <div className="m-2">
                    <select class="custom-select my-1 mr-sm-2" id="destination" name="destination">
                        <option selected>Select Your Destination</option>
                        <option value="ALC">African Leadership Campus</option>
                        <option value="Port Louis">Port Louis</option>
                    </select>
                </div>
                <h3 className='m-2'>Available Cars</h3>
                <div className="m-2 container">
                    <div className='row'>
                        <div className='col-3'>
                            <img src=''/>
                        </div>
                        <div className='col-5'>
                            <strong>10 min away</strong>
                            <p>+2</p>
                        </div>
                        <div className='col-2'>
                            <strong>1km</strong>
                        </div>
                        <div className='col-2'>
                            <strong>$26</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PassengerDashboard;   