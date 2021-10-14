import React from 'react';
import './App.css';
import useTabSwitch from './hooks/useTabSwitch';

function App() {
  const tabs = [
    {
      component: <h1>Hello Tab 1</h1>
    },
    {
      component: <h1>Hello Tab 2</h1>
    },
    {
      component: <h1>Hello Tab 3</h1>
    },
  ]
  const [tab, changeTab] = useTabSwitch(tabs, tabs[0])

  return (
    <>
      {tab}
      <button onClick={() => changeTab(1)}>Change Tab 1</button>
      <button onClick={() => changeTab(2)}>Change Tab 2</button>
      <button onClick={() => changeTab(3)}>Change Tab 3</button>
    </>
  );
}

export default App;
