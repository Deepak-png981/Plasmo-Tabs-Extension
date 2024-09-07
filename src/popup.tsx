import { useEffect, useState } from "react";
import { styles } from "./css/popup";
import './css/scrollbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  

const Popup = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  useEffect(() => {
    chrome.tabs.query({}, (tabs) => {
      setTabs(tabs);
    });
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
      if (activeTabs.length > 0) {
        setActiveTabId(activeTabs[0].id!);
      }
    });
  }, []);

  const switchToTab = (tabId: number) => {
    chrome.tabs.update(tabId, { active: true });
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { focused: true });
  };

  const closeTab = (tabId: number) => {
    chrome.tabs.remove(tabId); 
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));  
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Opened Tabs</h1>
        <span style={styles.tabCount}>{tabs.length} Tabs</span>
      </div>
      <ul style={styles.list}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            style={
              tab.id === activeTabId
                ? {
                  ...styles.activeTab
                }
                : styles.listItem}>
            <span
              style={styles.link}
              onClick={() => switchToTab(tab.id!)}
            >
              {tab.title || tab.url}
            </span>

            <span 
              className="fa-solid fa-rectangle-xmark" 
              style={tab.id === activeTabId ? styles.activeCloseButton : styles.closeButton} 
              onClick={() => closeTab(tab.id!)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff0000'} 
              onMouseLeave={(e) => e.currentTarget.style.color = tab.id === activeTabId ? styles.   activeCloseButton.color : styles.closeButton.color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
