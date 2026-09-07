import { useState } from 'react';
import Card from './Card.jsx'
import './Menu.css'

const productos = [
    {
        icon: '🍔',
        nombre: 'Hamburguesa',
        precio: 12,
        stock: 50,

    },
    {
        icon: '🌮',
        nombre: 'Taco',
        precio: 10,
        stock: 50,
    },
    {
        icon: '🌭',
        nombre: 'Pancho',
        precio: 8,
        stock: 50,
    },
    {
        icon: '🌯',
        nombre: 'Burrito',
        precio: 10,
        stock: 0,
    },
    {
        icon: '🍟',
        nombre: 'Papa fritas',
        precio: 5,
        stock: 50,
    },
    {
        icon: '🍜',
        nombre: 'Fideos',
        precio: 15,
        stock: 50,
    },
]

export default function Menu() {
    const [products, setProducts] = useState(productos)

    return (
        <div className="menu">
            <div className="card-list">
                {products.map((task, index) => (
                    <Card key={index} {...task} />
                ))}
            </div>
        </div>
    )
}
