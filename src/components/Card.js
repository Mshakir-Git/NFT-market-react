import { BsCart,BsFillCartFill } from 'react-icons/bs'
export const Card = ({item, seletedItems, setSeletedItems}) => {
    const {name,price}=item
    const add=()=>{
        setSeletedItems([...seletedItems,item])
    }
    const remove=()=>{
        console.log(seletedItems)
        setSeletedItems(seletedItems.filter(i=>i.id!=item.id))
    }
    const checkItem=(item)=>{
        let r=false
        seletedItems.forEach(i => {
            if(i.id==item.id){r=true}
        });
        return r

    }
    //style={{backgroundColor:!checkItem(item)?"green":"red"}}
    return (
        <div className="card">
            <div>
                <img src={require("../test.png")}/>
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                    
                    
                    <span onClick={()=>{!checkItem(item)?add():remove()}}>{!checkItem(item)?<BsCart fontSize={20} color='#3333ff' />:<BsFillCartFill fontSize={20} color='#3333ff' />}</span>
                </div>
            </div>
            
        </div>
    )
}
