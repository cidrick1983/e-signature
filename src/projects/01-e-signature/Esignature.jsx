import { useState } from 'react';
import Title from '../components/Title';

function Esignature() {
  const [name, setName] = useState('Your Signature');
  const [date, setDate] = useState('select date');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem 0',
  };
  document.body.style.background = '#eee';
  return (
    <div className="container text-center">
      <Title classes={'title'} text={name} />
      <Title classes={'main-title'} text={!date ? 'DoB' : date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aliquam
        minima. Earum, autem vel aut sapiente in ullam praesentium, tenetur
        repellendus, ea ab animi non numquam! Eius non asperiores doloribus?
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}

export default Esignature;
