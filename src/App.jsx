import { useState } from 'react'
import axios from 'axios';


const App = () => {
  console.log('kaksehl')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    event.preventDefault();
    
    const { name, value } = e.target;
      console.log(value)
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

  }
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('submitting')
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:3000/api/test', formData);
      console.log(response.data);
      alert("Email sent!");
      // Optionally, you can handle success or display a message to the user
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, you can handle errors or display an error message to the user
    }
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );

}

export default App
