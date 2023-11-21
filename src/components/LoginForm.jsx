import { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const projectID="a336b017-9799-4772-96e0-501a5eb9f9cb";

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label>Username </label>
          <input type="text" name='uname' value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
        </div>
        <div className="button-container">
          <input type="submit" className='button'/>
        </div>
      </form>
    </div>
  );
  return (
    //   <div className="form">
    //     <h1 className="title">Chat Application</h1>
    //     <form onSubmit={handleSubmit}>
    //     <div className="input-container">
    //       <label>Username </label>
    //       <input type="text" name='uname' value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
    //     </div>
    //     <div className="input-container">
    //       <label>Password </label>
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
    //     </div>
    //     <div className="button-container">
    //       <input type="submit" className='button'/>
    //     </div>
    //       {/* <div align="center">
    //         <button type="submit" className="button">
    //           <span>Start chatting</span>
    //         </button>
    //       </div> */}
    //     </form>
    //     <h1>{error}</h1>
        
    //   </div>

            <div className="app">
            <div className="login-form">
            <div className="title">Sign In</div>
                {renderForm}
                </div>
            </div>

      

  );

  
};

export default Modal;