import React from 'react'
import Driver from './Driver'

const DriversList = (props) => (
  <div className="container__grid">
    { 
      props.list.map((driverData, index) => (
        <Driver 
          data={driverData} 
          key={index} 
        />
      ))
    }
  </div>
)

export default DriversList
