import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [newName, setNewName] = useState('');
  const handleChange = () => {
    if (newName) setName(newName);
  };
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="New Name" />
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}

export default Profile;