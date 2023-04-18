import React from 'react'

const Location1 = ({location}) => {
  return (
    <section className='text-[#8EFF8B] font-normal font-fira-code relative bottom-8'>
        <h2 className='text-2xl font-bold tracking-widest'>{location?.name}</h2>
        <ul>
            <li> <span className='text-white'>Type: </span> {location?.type}</li>
            <li><span className='text-white'>Dimension: </span>{location?.dimension}</li>
            <li><span className='text-white'>Population: </span>{location?.residents.length} Residents</li>
        </ul>
    </section>
  )
}

export default Location1