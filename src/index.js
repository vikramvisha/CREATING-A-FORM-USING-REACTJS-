import React from "react";
import ReactDOM from "react-dom";
import Pageform from './component/header';


function Message(){
  return(
  <div>
  <Pageform/>
  </div>
  )
}
ReactDOM.render(<Message/>,document.getElementById("root"));