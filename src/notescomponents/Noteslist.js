import React, { useState, useEffect } from "react";
import Addnote from "./Addnote";
import Notes from "./Notes";


const Noteslist = () => {
  
  const [initallist, setlist] = useState();
  const [items, setitems] = useState([]);
  const [editdeltoggle,setEditdeltoggle]=useState(false);
  const [add,setAdd]=useState({id:new Date().getTime().toString(),title:"",des:""});

 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("addnotearr"));

    if (data) {
      setitems(data);

    }
  }, []);
  useEffect(() => {
    localStorage.setItem("addnotearr", JSON.stringify(items));

  }, [items]);
 

  const save = (addtext) => {

    if (addtext.title === "" || addtext.des === "") {
      alert("Please enter a title and description.");
      return;
    }
    if(editdeltoggle===true){
      console.log("entered if")
      setitems((olditems)=>{
        const updateitem=[...olditems];
        const edit=updateitem.find((items)=>{
          return items.id===add.id;
        })
        edit.title=addtext.title;
        edit.des=addtext.des;
        // updateitem[add.id]={...addtext};
        return updateitem;
      })
      setEditdeltoggle(false);
      setAdd({id:new Date().getTime().toString(),title:"",des:""});
    }

   else{
    setitems((olditems) => {
      return [...olditems, addtext];
    });
   }
    setlist("");

  }
  const addcomponent = () => {

    setlist(() => {
      return <Addnote onSave={save} add={add}/>
    }

    )

  }

const deletenote=(id)=>{
  console.log(id);
  const updateitemsarr=items.filter((items)=>{
    return items.id!==id;
  })
  setitems(updateitemsarr);
}

const editnote=(id)=>{
  const editeditem=items.find((items)=>{
    return items.id===id;
  })
  console.log(editeditem.title,editeditem.des);
setAdd(editeditem);

  setEditdeltoggle(true);

}

  return (
    <>
      <div className="addanote">
        <button onClick={addcomponent}>
          add a note
         {/* <i class="icon fa-solid fa-circle-plus fa-2xl"></i> */}
        </button>
      </div>
      <div className="notelist">
        <Notes items={items} 
        deletenote={deletenote} 
        editnote={editnote} 
        editdeltoggle={editdeltoggle}
        />
        {initallist}
        {editdeltoggle&&<Addnote index={add.id} onSave={save} add={add} setAdd={setAdd}/>}
      
      </div>
    </>
  );
}
export default Noteslist;