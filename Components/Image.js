import React from 'react';

export default function Image(){

const imgUrl = "https://scontent.fpkr3-2.fna.fbcdn.net/v/t39.30808-6/302048928_1073862583263146_6266998965351609069_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fyfo8Tr494cAX-pilGC&_nc_ht=scontent.fpkr3-2.fna&oh=00_AT8g73VcnmliqH4IlFkuhlkDGcHw-N0vmFeDQamHBtF4_A&oe=6328B057";

return (
  <div className="img_Container">
    <img src={imgUrl} alt="Profile picture" />
  </div>  
);    
}