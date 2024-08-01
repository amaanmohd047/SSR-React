export const styles = {
  calculator: {
    maxWidth: '400px',
    margin: '100px auto',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9'
  },
  display: {
    backgroundColor: '#222',
    color: '#fff',
    fontSize: '2em',
    textAlign: 'right',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  input: {
    fontSize: '1.5em'
  },
  result: {
    fontSize: '1.2em',
    color: '#aaa'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
  },
  button: {
    padding: '20px',
    fontSize: '1.5em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    transition: 'background-color 0.3s'
  },
  zeroButton: {
    gridColumn: 'span 2'
  }
};
