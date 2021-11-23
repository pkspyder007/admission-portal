import React from 'react'

function PersonalDetails(props) {
    function check(e){
        props.stopRest(1);
        
    }
    return (
        <>
            <h1 onClick={check}>Personal Details</h1>
            
        </>
    )
}

export default PersonalDetails
