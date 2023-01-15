import { useState } from 'react';
import Navbar from "./components/Navbar/Index";

function App() {
  const [email, setEmail] = useState(''); //setName = update name
  const [password, setPassword] = useState('');
  const [lesson, setLesson] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    console.log(lesson)
  }

  const getValueEmail = (event) => {
    setEmail(event.target.value)
  }

  function changeLesson(event) {
    setLesson(event.target.value)
  }

  return (
    <>
      <Navbar />
      <main className="main">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              onChange={getValueEmail} 
            />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <select name="lesson" id="lesson" onChange={changeLesson}>
            <option value="">-- Please Select --</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JAVASCRIPT">JAVASCRIPT</option>
          </select>
          <input type="submit" value="Login" />
        </form>
      </main>
    </>
  ); 
}

export default App;
