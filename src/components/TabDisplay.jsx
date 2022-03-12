import React from 'react'

const TabDisplay = (props) => {
   console.log(props);
   
   return (
      <div className="row w-25 justify-content-start align-items-center mx-4 p-3 border border-secondary">
         <span>{props.tabInfo.info}</span>
         {/* { props.tabInfo.map( (item, i) => ( <span key={i}>{item.info}</span> ) ) } */}
      </div>
   );
}

export default TabDisplay