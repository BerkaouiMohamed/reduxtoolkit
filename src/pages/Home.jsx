import {useSelector,useDispatch} from "react-redux"
import { addProduct, deleteProduct } from "../App";

function Home() {
const products=useSelector((store)=>store.products)
console.log(products);
const dispatch=useDispatch()
function addProd(){
dispatch(addProduct({id:666,title:"mouse",price:500}))
}
function deleteProd(){
    dispatch(deleteProduct({id:666,title:"mouse",price:500}))
    }
  return (
    <div>
      
<button onClick={addProd}>add</button>
<button onClick={deleteProd}>delete</button>


    </div>
  )
}

export default Home
