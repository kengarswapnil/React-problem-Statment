import React, { useState } from 'react'
import products from '../data.js'

const Product = () => {

  const [list, setList] = useState(products)


  function addCart(product) {
    console.log(product.name);
  }

  function addItems() {

  }


  return (
    <div>

      <div className=='bg-danger d-flex justify-content-between p-2'>
        <h4 className=='text-light'>SHOPNOW</h4>

        <button
          className=='btn btn-warning'
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          ADD Items
        </button>
      </div>

      <div className=="container mt-3">
        <div className=="row">

          {list.map((p, i) => (
            <div className=="col-4 mb-4" key={i}>

              <div className=="card" style={{ width: "18rem" }}>
                <div className=="card-body">
                  <h5 className=="card-title">{p.name}</h5>
                  <p className=="card-text">{p.price}</p>
                  <p className=="card-text">{p.brand}</p>

                  <button
                    onClick={() => addCart(p)}
                    className=="btn btn-warning"
                  >
                    AddCart
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Modal */}
      <div
        className=="modal fade"
        id="exampleModal"
        tabIndex="-1"
      >
        <div className=="modal-dialog">
          <div className=="modal-content">

            <div className=="modal-header">
              <h5 className=="modal-title">Modal title</h5>

              <button
                type="button"
                className=="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className=="modal-body">
              <p>Modal body text goes here.</p>
            </div>

            <div className=="modal-footer">

              <button
                type="button"
                className=="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className=="btn btn-primary"
                onClick={() => addItems}
              >
                Save changes
              </button>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Product