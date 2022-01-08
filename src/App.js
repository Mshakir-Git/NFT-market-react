import './App.css';
import { Card } from './components/Card'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

const [dummyItems, setDummyItems] = useState([...Array(30).keys()].map((id)=>{ return {
  id,
  name:"Martian",
  price:Math.floor(Math.random() * 100)
}})
)
const [filter, setFilter] = useState(()=>(i)=>true)
//const filter=(i)=>{return true}
const [seletedItems, setSeletedItems] = useState([])
console.log([1,2,3].indexOf(3))
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={
      <>
      <Header setFilter={setFilter} items={seletedItems}/>
      <div className="cards-container">
        {
          dummyItems.filter(filter).map((item)=><Card key={item.id} item={item} seletedItems={seletedItems} setSeletedItems={setSeletedItems}/>)
        }
      </div>
      </>  
      }
      />
      <Route path="/cart" element={<Cart seletedItems={seletedItems}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
