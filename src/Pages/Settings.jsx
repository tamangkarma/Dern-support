import React from 'react'
import { SettingsForm } from '../Components/SettingsForm'

const Settings = () => {
  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4 text-primary'>Store Settings</h1>
      <SettingsForm/>
    </div>
  )
}

export default Settings
