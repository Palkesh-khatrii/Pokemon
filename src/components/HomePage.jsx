import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

    return (
        <div>
            <h1>Pokédex for Pokémon</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pokemon/add">Add Pokemon</Link>
                    </li>
                    <li>
                        <Link to="/pokemon/list">List Pokemon</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
