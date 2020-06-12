import React, {useState} from 'react';
import './Room.css';


function Room(){
    let [isON, setON] = useState(false);
    let [Temp,setTemp] = useState(22);
   
    return(
         <div className= {`room ${isON ? "lit" : "dark" }`}>

         This room is {isON? "lit" : "dark"}
         <br></br>
         <button  onClick={()=>setON(!isON)}>ON </button>
         <button  onClick={()=>setON(!isON)}>OFF</button>
         <br></br> <br></br>
         <div>
         Current Temperature is: {Temp}
         <br></br>
         <button onClick={()=>setTemp(++Temp)}> + </button>
         <button onClick={()=>setTemp(--Temp)}> - </button>
         </div>
        </div>
        )

}

export default  Room;
