import type { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  container: {
    width: '300px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 1000px 10px rgba(0, 0, 0, 0.1)',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#333',
    textAlign: 'center' as 'center',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
    display: 'block',
    borderBottom: '1px solid #ddd',
    borderTop: '0.2px solid #ddd',
    padding: '12px',
    cursor: 'pointer', 
    transition: 'color 0.3s ease',
    wordBreak: 'break-word',
    whiteSpace: 'normal', 
  },
  linkHover: {
    color: '#0056b3', 
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  tabCount: {
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#cce5ff', 
    borderRadius: '5px',
  },

  
};
