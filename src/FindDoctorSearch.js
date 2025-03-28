import React, { useState } from 'react';

function FindDoctorSearch() {
  const [search, setSearch] = useState('');
  const doctors = ['Dr. Smith', 'Dr. Jones', 'Dr. Brown'];
  const filteredDoctors = doctors.filter(doc => doc.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h2>Find a Doctor</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Doctor" />
      <ul>
        {filteredDoctors.map(doc => <li key={doc}>{doc}</li>)}
      </ul>
    </div>
  );
}

export default FindDoctorSearch;