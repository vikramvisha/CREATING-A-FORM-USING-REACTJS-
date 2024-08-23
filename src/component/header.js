import React from "react";
import ReactDOM from "react-dom";
import "./pageform.css";

function Pageform(){
    return(
   <div className="pageform">
    <h1>Employee Form</h1>
    <form className="toptable">
  <tr className="table">
    <td>Firstname</td><br></br>
    <td><input type="text" placeholder="Enter your Firstname"></input></td>
  </tr>
  <tr className="table">
    <td>Middlename</td><br></br>
    <td><input type="text" placeholder="Enter your Middlename"></input></td>
  </tr>
  <tr className="table">
    <td>Lastname</td><br></br>
    <td><input type="text" placeholder="Enter your Lastname"></input></td>
  </tr>
  <tr className="table">
    <td>Date of Birth</td><br></br>
    <td><input type="date" placeholder="Enter your date"></input></td>
  </tr>
  <tr className="table">
    <td>Email</td><br></br>
    <td><input type="email" placeholder="Enter your mail"></input></td>
  </tr>
  <tr className="table">
    <td>Phonenumber</td><br></br>
    <td><input type="number" placeholder=""></input></td>
  </tr>
  <tr className="table">
    <td>Gender</td><br></br>
    {/* <td><input type="email" placeholder="select"></input></td> */}
    <select id="Depts">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    
         </select>
  </tr>
  <tr className="table">
    <td>Start Date</td><br></br>
    <td><input type="date" placeholder="Enter your date"></input></td>
  </tr>
  <tr className="table">
    <td>End Date</td><br></br>
    <td><input type="date" placeholder="Enter your date"></input></td>
  </tr>
  <tr className="table">
    <td>JobPosition</td><br></br>
    <td><input type="text"></input></td>
  </tr>
  <tr className="table">
    <td>Select teams</td><br></br>
    <select id="Depts">
                    <option value="A">TEAM A</option>
                    <option value="B">TEAM B</option>
                    <option value="C">TEAM C</option>
                    
         </select>
  </tr>
  <tr className="table">
    <td>Select Designation</td><br></br>
    {/* <td><input type="text" placeholder=""></input></td> */}
    <select id="Depts">
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="AIML">AIML</option>
                    <option value="BME">BME</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
         </select>
  </tr>
  <tr className="table">
    <td>Billable hours</td><br></br>
    <td><input type="number" placeholder=""></input></td>
  </tr>
  {/*  */}
    <tr>
    <td colspan="3">
      <div class="button-container">
        <button type="submit">submit</button>
      </div>
    </td>
  </tr>
</form>
    <br></br>
    </div>
  
    )
  }
  export default Pageform;
