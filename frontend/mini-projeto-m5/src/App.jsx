import './App.css'
import PagGetCat from './Pags/pagGetCat'
import Card from './component/Card.component'

function App() {
  
  return (
    <>
    <div className='group-card'>
    <Card/>
    </div> 
    <PagGetCat/>
    {/* <div className='cats-id'>
    <Card/>
    </div>

    <div className='cats-age'>
    <Card/>
    </div> */}
    </>
  )
}

export default App
