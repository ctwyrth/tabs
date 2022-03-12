import { useState } from 'react'
import './App.css';
import Tab from './components/Tab';
import TabDisplay from './components/TabDisplay';

function App() {
  const [tabInfo, setTabInfo] = useState({tab: 'Tab 0', info: "Click on any tab to see its content."});

  const handleClick = (newTabInfo) => {
    setTabInfo(newTabInfo);
  }

  return (
    <div className="App">
      <Tab onTabClick={ handleClick } />
      <TabDisplay tabInfo={ tabInfo } />
    </div>
  );
}

export default App;
