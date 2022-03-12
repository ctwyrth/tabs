import React, { useState } from 'react'

const Tab = (props) => {
   const [tab, setTab] = useState("");
   const [info, setInfo] = useState("");

   const tabs = [{label: 'Tab 1', content: 'What is this?'}, {label: 'Tab 2', content: 'This is crazy!'}, {label: 'Tab 3', content: "I can't think anymore."}];

   const onClickHandler = (value) => {
      setTab(value.label);
      setInfo(value.content);

      console.log(value);
      console.log(tab);
      console.log(info);

      passToParent();
   }

   const passToParent = () => {
      props.onTabClick( {tab: tab, info: info} );
      console.log(tab, info);
   }

   return (
      <div className="d-flex justify-content-start align-items-center mt-4 mx-4">
         { tabs.map( (item, i) => (<button onClick={ () => onClickHandler(item) } className="btn btn-sm btn-outline-secondary me-1" style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} key={i}>{item.label}</button>) )}
      </div>
   )
}

export default Tab

// console.log(value);
// console.log(value.label);
// console.log(value.content);