
import './App.css'
import {Routes ,Route} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {Provider} from "react-redux"
import { useEffect, useState } from 'react'
import {toast,ToastContainer } from "react-toastify"


const productSlice=createSlice({
name:"productSlice",
initialState:[{id:5555,title:"keybord",price:150}],
reducers:{
  fetchProducts:(state,action)=> action.payload,
addProduct:(state,action)=>{state.push(action.payload)},
deleteProduct:(state,action)=>{return state.filter((ele)=>ele.id!=action.payload.id)}
}
})
export const  {addProduct,deleteProduct}=productSlice.actions

 const store = configureStore({
  reducer:{
    products:productSlice.reducer,
  
  }
 })
function App() {
  const [status,setStatus]=useState({
    loading:false,
 
    error:null
  })
  async function getProducts(){
    try{
      const res= await  fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      store.dispatch(productSlice.actions.fetchProducts(data))      

    }catch(e){
      console.log(setStatus({...status,error:e }))
      
    }
    finally{
      setStatus({...status,loading:false})
    }
        
            // // .then(res=>res.json())
            // .then(json=>store.dispatch(productSlice.actions.fetchProducts(json))).then((a))
            // .catch(e=>setStatus({...status,error:e
            // })).finally(()=>setStatus({...status,loading:false}))
  }
  useEffect(()=>{
  toast.promise(
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>store.dispatch(productSlice.actions.fetchProducts(json))),
    {
      pending:"loading",
      success:"succes",
      error:"somthing went wrong"
    }

  )
  },[])


  return (
    <Provider store={store}>
    <div>
      <ToastContainer/>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>

     </Routes>
       
    </div>
    </Provider>
  )
}

export default App
