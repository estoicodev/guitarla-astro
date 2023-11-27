import '../styles/ListOfCart.css'

const ListOfCart = ({ cart }) => {
  return (
    <>
      {
        cart?.length > 0
          ? cart?.map((guitar) => (
              <article key={guitar.id} className="product">
                <div className="img-ctn">
                  <img src={guitar.image} alt={`${guitar.name} Guitar`} />
                </div>
                <div className="content">
                  <h3 className="name">{guitar.name}</h3>

                  <div className="quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={guitar.quantity}
                      onChange={e => updateQuantity({
                        guitarId: guitar.id,
                        quantity: e.target.value
                      })}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p className="price">Price: <span>${guitar.price}</span></p>
                  <p className="subtotal">Subtotal: <span>${guitar.price * guitar.quantity}</span></p>
                </div>

                <button
                  className="btn-delete"
                  onClick={() => deleteFromCart(guitar.id)}
                >
                  X
                </button>
              </article>
            ))
          : <p>Your cart is empty...</p>
      }
    </>
  )
}

export default ListOfCart
