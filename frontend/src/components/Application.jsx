import React from 'react';
import Sidebar from './Sidebar';
function Application(){
    const handelRender =(link)=>{
        setRender(link);
      }
    return (
        <>
        <Sidebar  GoTo={handelRender}/>
        {/* {
           render===0 && <Instruction GoTo={handelRender} />
         }
        {
            render==1 && <Instruction GoTo={handelRender}/>
        }
        {
            render==2 && <Application />
        } */}
        

        </>
);
}
export default Application;

