import React from 'react'
import './SolarSystem.css'
import {sun} from '../../assets/index'

const SolarSystem = () => {
  return (
    <div className='solar__sysytem'>
      <div className='sun'>
        <img src={sun} alt=''/>
      </div>
<div className='mercury'></div>
<div className='venus'></div>
<div className='earth'>
<div className='moon'></div>
</div>
<div className='mar'></div>
<div className='jupiter'></div>
<div className='saturn'></div>
<div className='uranus'></div>
<div className='pluto'></div>
    </div>
  )
}

export default SolarSystem
