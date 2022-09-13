import { useState } from 'react'

import './App.css'
import CustomInput from './components/CustomInput'

function App() {


  return (
    <div className="box">
      <div className="logo">
        Intern Sign Up
      </div>

      <form>
        <div className="inputGroup">
          <CustomInput type="text" label="Full Name" required={true} placeholder="Name" />
        </div>
        <div className="inputGroup">
          <CustomInput type="email" label="Email" required={true} placeholder="foo@bar.com" />
          <CustomInput type="number" label="Phone" required={false} placeholder="(83) 00000-0000" />
        </div>
        <div className="inputGroup">
          <CustomInput type="password" label="Password" required={true} placeholder="Enter your password" />
          <CustomInput type="date" label="Birthday" required={true} />
        </div>
        <div className="buttonGroup">
          <label><input type="checkbox" name="checkbox" />I accept the terms and privacy</label>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default App
