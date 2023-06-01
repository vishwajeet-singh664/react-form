import React, {useState} from "react";
import Modal from 'react-modal';
import '../components/form.css'

const Forms = () => {
  
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [num, setNum] = useState('')
  const [submittedData, setSubmittedData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);



  const onSubmit = (e) => {
    e.preventDefault();
    const newData = { name, email,password,num };
    setSubmittedData([...submittedData, newData]);
    setEmail('');
    setPassword('');
    setNum('');
    setModalIsOpen(true);
   
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    
    <div>
      <form className="container" onSubmit={onSubmit}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        Email:
        <input className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        Password:
        <input className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        Number:
        <input className="input"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <button className="submitbtn" type="submit">submit</button>
      </form>

      <div>
      <h2>Submitted Data</h2>
      <table className="table-container">
        <thead className="">
          <tr className="">
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h2>Modal Content</h2>
      <p>Submitted successfully!</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>

    
</div>
  
  );
};

export default Forms;
