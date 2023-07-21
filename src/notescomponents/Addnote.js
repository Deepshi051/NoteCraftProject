import React, {useState } from "react";
// import Notes from "./Notes";

const Addnote = ({onSave,add}) => {
  
  const [addtext, setAddText] = useState(add);
console.log(addtext);


  const change = (event) => {
    const name = event.target.name;
    const val = event.target.value;

    setAddText((olditems) => {
      return { ...olditems, [name]: val };
    }
    );
  }
 
  const save = () => {
    onSave(addtext);  
    setAddText({id:"", title: "", des: "" })
    // setAdd(addtext);
  }

  return (
    <>
    
        <div className="add newnote" >

        <div className="newnotehead">

          <div className="title">
            <input type="text" name="title" placeholder="Title goes here!" onChange={change} value={addtext.title} />
          </div>

          <div className="message">
            <textarea rows="40" cols="40" name="des" placeholder="enter your text!" onChange={change} value={addtext.des} />
          </div>

        </div>

        <div className="newnotefooter">

          <div className="save-div" >
            <button className="save" onClick={save} style={{ display: "block" }}><i class="fa-sharp fa-regular fa-floppy-disk fa-xl"></i></button>
          </div>

        </div>

      </div>
       
      {/* {setIsSaved(false)} */}
     
    </>
  );
}
export default Addnote;

// style={{ display: issaved ? "none" : "block" }}

