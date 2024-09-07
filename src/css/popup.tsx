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
    fontWeight: 'bold',
    borderBottom: '1px solid black',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',            
    alignItems: 'center',       
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #ddd',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
    flexGrow: 1,
    cursor: 'pointer',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    marginRight: '10px',
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
    padding: '10px 0px 10px 4px',
    marginLeft: '-5px',
    display: 'flex',            
    alignItems: 'center',       
    justifyContent: 'space-between',
  },
  closeButton: {
    color: '#ff4d4d', 
    fontSize: '16px', 
    cursor: 'pointer',
    padding: '0 5px',
    transition: 'color 0.3s ease',
    
  },
  activeCloseButton: {
    color: '#0056b3', 
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0 5px',
    transition: 'color 0.3s ease',
    marginLeft: 'auto', 
  },
};

