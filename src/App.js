// note making project:
import React  from "react";
import Noteslist from "./notescomponents/Noteslist";
import "./App.css";
// import "./index.css";

const App = () => {


    return(
        <>
        <div className="main-div">
    
            <div className="notes-div">
            {/* <div className="images">
            <img src="https://img.fortawesome.com/1ce05b4b/hero-icon-bg.svg" className="top-image" alt="background"/>
        
        <img src="https://img.fortawesome.com/1ce05b4b/hero-icon-bg.svg" className="bottom-image"  alt="background"/>
            </div> */}
            
                 <Noteslist 
                //  notes={notesdata} savenew={savenew}
                 />
                
            </div>
        </div>
    </>
    );
   
}
export default App;