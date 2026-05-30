import React, { useContext } from 'react'
import { useState } from 'react'
import products from '../data';
import { CartProductContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const [product, setProduct] = useState(products);
  const [name, SetName] = useState();
  const [brand, setBrand] = useState();
  const [price, SetPrice] = useState();
  const {cart,setCart} = useContext(CartProductContext)
  const[search,setSearch] = useState('');

  const filtedProduct = product.filter((p)=>(
    p.name.toLowerCase().includes(search.toLowerCase()) ||  p.brand.toLowerCase().includes(search.toLowerCase())
  ))

 function AddCart(item) {
  setCart((prevCart) => {
    const exists = prevCart.find((p) => p.id === item.id);

    if (exists) {
      toast.success("Product i already added")

      return prevCart; // ❌ do nothing if already exists
    
    } else {
        toast.success("Product added in cart")
      return [...prevCart, item]; 
  
      // ✅ add new item
    }
  });
}

  function AddItem(e) {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      brand,
      price
    }
    setProduct([...product, newProduct])
     toast.success("Product added Sucessfully")
    console.log(product)
   
    SetName("")
    setBrand("")
    SetPrice("")
  }

  function Delete(id){
  const idx =   product.findIndex((p)=>p.id === id)
  product.splice(idx,1)
    toast.warning("Product deleted")
  setProduct([...product])
  }
  return (
    <div>
         <ToastContainer />
      <div className='d-flex justify-content-between p-2 bg-danger'>
        <h4>ShopNow</h4>  
        <input type="text" placeholder='Search Products' onChange={(e)=>setSearch(e.target.value)} name="" id="" />

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Item {cart.length}
        </button>
      </div>
      <div className="container mt-5 mb-2">
        <div className='row gap-2'>
          {filtedProduct.map((p, i) => (
            <div className="col-2">
              <div className="card" style={{ width: "12rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{p.name}</li>
                  <li className="list-group-item">{p.brand}</li>
                  <li className="list-group-item">{p.price}</li>
                </ul>
                <div className="card-footer">
                  <button className='btn btn-danger' onClick={()=>Delete(p.id)}>Delete</button>
                </div>
                <div className="card-footer">
                  <button className='btn btn-danger' onClick={()=>AddCart(p)}>Add Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>







      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <form class="modal-content" onSubmit={AddItem}>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" onChange={(e) => SetName(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-2">
                <input type="text" class="form-control" onChange={(e) => setBrand(e.target.value)} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Brand</label>
              </div>
              <div class="form-floating">
                <input type="text" class="form-control" onChange={(e) => SetPrice(e.target.value)} id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Price</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
     
      </div>
    </div>
  )
}

export default Product
