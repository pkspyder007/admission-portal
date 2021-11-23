import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Help from './Help';
import PersonalDetails from './PersonalDetails';
import AcademicDetails from './AcademicDetails';
import FileDetails from './FileDetails';
function Application(){
    const[restrict,setRestrict]=useState(0);
    const[render,setRender]=useState(0); 
    function handelRestrict(linka){
        console.log(linka);
        setRestrict(linka);
    }
    const handelRender =(link)=>{
        
        if(link<=restrict){
            setRender(link);
            
        }else{
            setRender(restrict);
        }
        
      }
    return (
        <>
        <Sidebar rest={restrict}  GoTo={handelRender}/>
        <section className="application-main">
            <div className="application-main__container">
                <div className="application-main-item item-1">
                    {render===0 && <PersonalDetails stopRest={handelRestrict}/>}
                    {render===1 && <AcademicDetails />}
                    {render===2 && <FileDetails  />}
                </div>
                <div className="application-main-item item-2">
                    <Help />

                </div>
            </div>
        </section>
       
        

        </>
);
}
export default Application;

