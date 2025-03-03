// UserDisplay.jsx
import { useState, useEffect } from 'react';
import './UserDisplay.css';

function UserDisplay() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput]=useState("")

  
  const handleUserInputChange=(e)=>{
    const input=e.target.value
    setUserInput(input)
  }

  useEffect(()=>{
      
    const filteredUsers=users.filter((val, idx)=>val.name.includes(userInput))
    setUsers(filteredUsers)
    // TRY AND DEBUG THIS .... 

  },[userInput])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("DATA ",data)
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2);
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="container">
      <header>
        <h1>User Directory</h1>
        <p>Data from JSONPlaceholder API</p>
      </header>
      <div className='w-full p-2'>
      <input onChange={(e)=>handleUserInputChange(e)} placeholder='Search' />
      </div>
     
      
      <div className="users-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <div className="user-header">
              <div className="user-avatar">{getInitials(user.name)}</div>
              <div className="user-name-container">
                <h2>{user.name}</h2>
                <div className="username">@{user.username}</div>
              </div>
            </div>
            
            <div className="user-info">
              <div className="info-item">
                <strong>Email</strong>
                <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
              </div>
              
              <div className="info-item">
                <strong>Phone</strong>
                <p>{user.phone}</p>
              </div>
              
              <div className="info-item">
                <strong>Website</strong>
                <p><a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a></p>
              </div>
              
              <div className="info-item">
                <strong>Address</strong>
                <p>
                  {user.address.street}, {user.address.suite}<br />
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
              
              <div className="company-section">
                <div className="company-title"><strong>Company:</strong> {user.company.name}</div>
                <div className="company-phrase">"{user.company.catchPhrase}"</div>
                <div className="company-bs">{user.company.bs}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDisplay;