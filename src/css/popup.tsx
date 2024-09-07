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
  listItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    cursor: 'pointer', 
    transition: 'color 0.3s ease',
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

  
};
