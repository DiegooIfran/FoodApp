export default function Item(props) {
    const { icon, quantity, price } = props

    return (
        <article style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px', fontSize: '1.75rem' }}>
            <div style={{ placeContent: 'center' }}><span>{icon}</span>x{quantity}</div>
            <div style={{ placeContent: 'center' }}>${price * quantity}
                <button style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '2rem' }}>❌</button>
            </div>
        </article>
    )
}