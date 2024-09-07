import type { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  container: {
    width: '300px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
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
  }
};
