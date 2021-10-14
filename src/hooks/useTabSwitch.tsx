import React from 'react'

interface Tab {
  component: any;
}

const useTabSwitch: (
  tabs: Tab[],
  initialTab: Tab,
) => [
    tab: any,
    changeTab: (index: number) => void,
  ] = (
    tabs: Tab[],
    initialTab: Tab,
  ) => {
    const [tab, setTab] = React.useState(initialTab);
    const [index, setIndex] = React.useState<number>(0)
    const changeTab: (index: number) => void = (index: number) => {
      setIndex(index - 1)
    };
    React.useEffect(() => {
      setTab(tabs[index])
    },[tabs, index])
  
  return [tab.component, changeTab]
}

export default useTabSwitch;