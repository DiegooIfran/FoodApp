import './Card.css'
import { useState, useContext } from 'react';
import { pedidosContext } from '../App';

export default function Card({ icon, nombre, precio, stock }) {
    const { pedidos, setPedidos } = useContext(pedidosContext);
    const [numero, setNumero] = useState(1);
    const manejarCambio = (event) => {
        setNumero(Number(event.target.value))

        let cantidad = numero

        const pedidoExistente = pedidos.find(pedido => pedido.nombre === nombre);

        const nuevoPedido = pedidoExistente
            ? { ...pedidoExistente, cantidad }
            : { icon, nombre, precio, stock, cantidad };

        setNumero(event.target.value);

        const nuevosPedidos = pedidos.filter(pedido => {
            return pedido.nombre !== nombre
        })

        const final = [...nuevosPedidos, nuevoPedido]
        console.log(final)

        setPedidos(final)
    };
    if (stock != 0) {
        return (
            <div className="card">
                <p className="emoji">{icon}</p>
                <input type="number" className="input" onChange={manejarCambio}></input>
            </div>
        )
    }
    else {
        return (
            <div className="card no">
                <p className="emoji">{icon}</p>
                <p className="noStock">No stock</p>
            </div>
        )
    }
}