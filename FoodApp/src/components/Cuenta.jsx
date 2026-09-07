import { useContext } from "react";
import Item from "./Item.jsx";
import { pedidosContext } from "../App.jsx";

export default function Cuenta() {
    const { pedidos } = useContext(pedidosContext);

    return (
        <aside style={{ padding: '15px', height: '100vh', boxSizing: "border-box" }}>
            <div style={{ border: 'black 1px solid', width: '33vw', boxSizing: "border-box", height: '100%', borderRadius: '16px', padding: '25px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <header style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>CUENTA</h2>
                </header>
                <div style={{ minHeight: '75%', display: 'flex', gap: '15px', flexDirection: 'column' }}>
                    {pedidos &&
                        pedidos.map((pedido, index) => (
                            <Item key={index} props={pedido} />
                        ))
                    }
                </div>
                <footer style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>TOTAL ???</h2>
                </footer>
            </div>
        </aside>
    )
}