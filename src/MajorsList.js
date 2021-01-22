import react from 'react';
import MajorItem from './majoritem';

const MajorsList =props=>{
    let x =0;
  
    const majorslist = [];

    while(x< props.majors.length){
        majorslist.push(   
  
          <MajorItem major={props.majors[x]}/>

            );
        x+=1;
    }
   return (
       
       <ul>
        {majorslist}
       </ul>
 
   );

};
export default MajorsList;