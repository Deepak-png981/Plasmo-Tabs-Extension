import { useEffect, useState } from "react";
import { styles } from "./css/popup";
import './css/scrollbar.css';
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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Open Tabs</h1>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
