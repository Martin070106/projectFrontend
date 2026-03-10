import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { cart, updateQty, removeItem, clear } = useCart()

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0)

  return (
    <main className="cart-page" style={{padding:24,maxWidth:900,margin:'24px auto'}}>
      <h2>Kosár</h2>
      {cart.length === 0 ? (
        <p>A kosarad üres.</p>
      ) : (
        <div className="cart-list">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-details">
                <div className="cart-title"><strong>{item.name}</strong></div>
                <div className="cart-price">{item.price} Ft</div>
                <div className="cart-controls">
                  <label className="qty-label">Mennyiség</label>
                  <input className="qty-input" type="number" value={item.qty} min={1} onChange={e => updateQty(item.id, Number(e.target.value))} />
                </div>
              </div>
              <button className="btn-delete" aria-label={`Törlés ${item.name}`} onClick={() => removeItem(item.id)}>
                <i className="bi bi-trash" />
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-total">
              <div className="total-label">Végösszeg</div>
              <div className="total-amount">{total} Ft</div>
            </div>
            <div className="cart-actions">
              <button className="btn" onClick={() => clear()}>Kosár ürítése</button>
              <button className="checkout-btn" onClick={() => { alert('Fizetés mock - köszönjük a vásárlást!'); clear() }}>Vásárlás</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
