import React,{useState} from "react";

const Notes = ({ items, deletenote, editnote, editdeltoggle }) => {
const [selectednoteid,setSelectedNoteId]=useState(null);

const colors=["#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787","#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787","#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787"
,"#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787","#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787","#ffd43b","#74c0fc","#63e6be","#b197fc","#ff8787","#b197fc","#ff8787","#ffd43b","#74c0fc"];
    return (
        <>
            {
                items.map((i,index) => {
                    
                    return (
                        <div className="notes-body" id={index} style={{backgroundColor:colors[index]}} >
                            <div className="notehead">
                                <div className="title">
                                    <h3>{i.title}</h3>
                                </div>
                                <div className="message" >
                                    <p>{i.des}</p>
                                </div>
                            </div>
                           
                             
                                    <div className="footer">

                                        <div className="delete-icon">
                                            <i className="fa-solid fa-trash fa-lg" onClick={() => { deletenote(i.id) }} ></i>
                                        </div>
                                        {
                                            (editdeltoggle&&selectednoteid===i.id)?<div className="save-div" >
                                            <button className="save"  style={{ display: "block" }}><i class="fa-sharp fa-regular fa-floppy-disk fa-xl"></i></button>
                                          </div>:<div className="edit-icon" >
                                            <i class="fa-solid fa-pen-to-square fa-lg" onClick={() =>{setSelectedNoteId(i.id);editnote(i.id);}}></i>
                                        </div>
                                        }
                                        {/* {
                                            selectednoteid===i.id? <div className="save-div" >
                                            <button className="save"  style={{ display: "block" }}><i class="fa-sharp fa-regular fa-floppy-disk fa-xl"></i></button>
                                          </div>:<div className="edit-icon" >
                                            <i class="fa-solid fa-pen-to-square fa-lg" onClick={() => {setSelectedNoteId(i.id);editnote(i.id)}}></i>
                                        </div>
                                        } */}
                                       
                                        
                                        
                                    </div>
                                

                        </div>
                    );

                })
            }


        </>
    );
}
export default Notes;