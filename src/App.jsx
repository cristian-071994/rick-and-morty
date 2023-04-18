import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location1 from './components/Location1'
import ResidentList from './components/ResidentList'




function App() {

  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = (e.target.locationId.value)
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    
    axios.get(URL)
    .then((res)=> setLocation(res.data))
    .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
    
  },[])
  

  return (
    <div className="App  text-center bg-[url('/images/background-stars.png')] bg-repeat">
      <div className='flex justify-center items-center transform -translate-y-36 px-3'>
        <img className= 'animate-spin_edit'  src="/images/spiral.png" alt="" />
        <div className='absolute bottom-16 px-2'>
          <img src="/images/name.png" alt="" />
        </div>
      </div>
      <form className='px-2 relative -top-16 ' onSubmit={handleSubmit}>
        <div className='relative flex justify-center max-w-[520px] mx-auto border-collapse border border-[#8EFF8B]'>
          <input id='locationId' placeholder='Type a location Id...' className='flex-1 border border-[#8EFF8B] bg-transparent text-center text-gray-500 font-bold' type="text" />
          <button className=' border-[#8EFF8B] border bg-[#8EFF8B]'><i className='bx bx-search-alt text-white px-8 text-2xl font-medium'></i></button>
        </div>

        <h2 className='text-[#8EFF8B] font-semibold font-fira-code mt-8 '>Welcome to the crazy universe!</h2>
      </form>
      
      <Location1 location = {location}/>
      <ResidentList location = {location}/>      
    </div>
  )
}

export default App
