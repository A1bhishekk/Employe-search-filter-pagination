import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Table from './Component/Table'
import { useEffect } from 'react'
import Pagination from './Component/Pagination'

const App = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  // console.log(data)


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://dummyjson.com/users`)
      setData(response.data.users)
    }
    // if(query.length===0 || query.length>2)
    fetchUsers();
  }, [])
  return (
    <>
      <div className="header">
        <h1>Technical Abhi</h1>
        <input type="text" placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Pagination  data={data}/>
    </>
  )
}

export default App