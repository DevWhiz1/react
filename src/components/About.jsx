import React, { useState, useEffect } from 'react';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Replace with your actual API URL
    const fetchData = async () => {
      const response = await fetch('https://fake-json-api.mock.beeceptor.com/companies/');
      const data = await response.json();
      setCompanies(data);
    };

    fetchData();
  }, []); // Empty array ensures it runs once on mount

  return (
    <div>
      <h1>Company List</h1>
      {companies.map((company) => (
        <div key={company.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <img src={company.logo} alt={`${company.name} logo`} width="100" />
          <h2>{company.name}</h2>
          <p><strong>Address:</strong> {company.address}</p>
          <p><strong>Country:</strong> {company.country}</p>
          <p><strong>Zip:</strong> {company.zip}</p>
          <p><strong>Employee Count:</strong> {company.employeeCount}</p>
          <p><strong>Industry:</strong> {company.industry}</p>
          <p><strong>Market Cap:</strong> ${company.marketCap}</p>
          <p><strong>CEO:</strong> {company.ceoName}</p>
          <p><strong>Website:</strong> <a href={`https://${company.domain}`} target="_blank" rel="noopener noreferrer">{company.domain}</a></p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;








// import React,{useEffect, useState} from 'react'

// const About = () => {
// const [companies,setCompanies] =useState([])

//   useEffect(()=>{
//     const fetchData= async()=>{
//       const response=await fetch("https://fake-json-api.mock.beeceptor.com/companies");
//       const data=await response.json();
//       console.log(data);
//       setCompanies(data);
//     }
//     fetchData();
//   },[])
//   return (
//     <>
//     {
//       companies.map((company)=>(
//         <div key={company.id}>
//           <h2>{company.name}</h2>
//           <p>{company.description}</p>
//         </div>
//       ))
//     }
//     </>
//   )
// }
// export default About