import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Pagination from './Component/Pagination'

const App = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // console.log(data)

  // const keys = ['firstName', 'email', 'age','phone']
  const serach = (items) => {
    return items.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(query.toLowerCase())
      })
    })
  }




  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://dummyjson.com/users`)
      if(response.status===200) setLoading(false)
      setData(response.data.users)
    }
    const timeout=setTimeout(()=>{
       fetchUsers();
    },1000)
    return ()=>clearTimeout(timeout)
  }, [query])

  return (
    <>
      <div className="header">
        <h1>Technical Abhi</h1>
        <input type="text" placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading?<h1 style={{textAlign:"center",color:"red"}}>Loading...</h1>:<Pagination data={serach(data)} />}
    </>
  )
}

export default App