import React from 'react';


export default function Button(probs){
    const emailUrl="https://mail.google.com/mail/u/0/?to=herojk64@gmail.com&su=&body=&bcc=&fs=1&tf=cm";
function linkEmail(){

window.open(
    emailUrl,
    '_blank'
);
}
    return(
        <div className="btn-Container">
            
            <button type="button" onClick={linkEmail}>
            <img src='./Images/Mail.png' alt="Mail"/>
            {probs.btnName}
            </button>
        </div>  
    );
}