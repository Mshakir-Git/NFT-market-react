import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Header = ({items,setFilter}) => {

    const [padding,setPadding]=useState("10px")
    let navigate=useNavigate()
    const animate=()=>{
        setPadding("15px")
        setTimeout(()=>{setPadding("10px")},250)
    }
    useEffect(() => {
        animate()
     }, [items])
    return (
        <header className="header">
            <h1  onClick={()=>setFilter(()=>i=>true)} >NFT Market</h1>
            <div onClick={()=>{navigate("./cart")}} className='header-cart' style={{padding}}>Cart:{items.length}</div>

        </header>
    )
}
