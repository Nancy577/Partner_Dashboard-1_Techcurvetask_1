import React, { useState } from 'react';
 import './Opportunity.css';
import { FaEye } from 'react-icons/fa';
    
    const Opportunity = () => {
        const [data, setData] = useState([
            { Date: '6-9-2022', Name: 'Mrs Dianne Rushell', ContactNumber:'(+33)7 00555679',Country:'Jordan',Address:'12 The Crescent.....',TransactionId:'3aa1997-f5',Status:'Applied'},
            { Date: '6-9-2022', Name: 'Dr Cody Fisher', ContactNumber:'(+33)6 55423324',Country:'Kosvo',Address:'2 New Street....',TransactionId:'86f78e30-1c',Status:'Completed'},
            { Date: '6-9-2022', Name: 'Dr Arlene McCoy', ContactNumber:'(+33)7 0055674',Country:'Eritra',Address:'787 Milliam,Bath..',TransactionId:'afb3ba5d-11',Status:'In progress'},
            { Date: '6-9-2022', Name: 'Mr Guy Hawkins', ContactNumber:'(+33)6 5542356',Country:'Crotia',Address:'96 Garge Road',TransactionId:'3aa1997-f6',Status:'completed'},
            { Date: '6-9-2022', Name: 'Dr Kristin Watson', ContactNumber:'(+33)7 00556786',Country:'Gubam',Address:'25 Alexendra Road',TransactionId:'afb3ba5d-1b',Status:'In progress'},
          ]);
          const [selectedItemId, setSelectedItemId] = useState(null);
        
          const handleView = (id) => {
            setSelectedItemId(id);
          };
        
          const selectedItem = data.find((item) => item.id === selectedItemId);
        
          return (
            <div>
              <h1>Opportunity</h1>
              <br></br>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Country</th>
                    <th>Address</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.Date}>
                      <td>{item.Date}</td>
                      <td>{item.Name}</td>
                      <td>{item.ContactNumber}</td>
                      <td>{item.Country}</td>
                      <td>{item.Address}</td>
                      <td>{item.TransactionId}</td>
                      <td>{item.Status}</td>
                      {/* <td>{item.Action}</td> */}
                      
                      <td>
                        <button onClick={() => handleView(item.id)}>
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {selectedItem && (
                <div>
                  <h2>Selected Item</h2>
                  <p>Date: {selectedItem.Date}</p>
                  <p>Name: {selectedItem.Name}</p>
                  <p>ContactNumber: {selectedItem.ContactNumber}</p>
                  <p>Country: {selectedItem.Country}</p>
                  <p>Address: {selectedItem.Address}</p>
                  <p>Transaction: {selectedItem.TransactionId}</p>
                  <p>Status: {selectedItem.Status}</p>
                  <p>Action: {selectedItem.Action}</p>
                </div>
              )}
            </div>
          );
        };
  
        
    
    export default Opportunity;
    


