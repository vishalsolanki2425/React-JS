import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileCardTask from './Component/User Profile Card Task'

function App() {

  return (
    <div className="profile">
      <UserProfileCardTask name="vishal solanki" tital="web develop" email="vishalsolanki@gmail.com" contact="9909295049" gender="male"/>
      <UserProfileCardTask name="khushal vaghasiya" tital="web develop" email="khushalvaghasiya@gmail.com" contact="9909295049" gender="male"/>
      <UserProfileCardTask name="yogesh radhod" tital="web develop" email="yogeshradhod@gmail.com" contact="9909295049" gender="male"/>
      <UserProfileCardTask name="vishal solanki" tital="web develop" email="vishalsolanki@gmail.com" contact="9909295049" gender="male"/>
      <UserProfileCardTask name="khushal vaghasiya" tital="web develop" email="khushalvaghasiya@gmail.com" contact="9909295049" gender="male"/>
      <UserProfileCardTask name="yogesh radhod" tital="web develop" email="yogeshradhod@gmail.com" contact="9909295049" gender="male"/>
    </div>
  )
}

export default App
