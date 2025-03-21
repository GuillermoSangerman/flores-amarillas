import React from 'react'
import { Link } from 'react-router'

export function Home() {
    return (
        <article>
            <div className="greetings">
                <span>H</span>
                <span>o</span>
                <span>l</span>
                <span>a</span>
                <span>!</span>
            </div>
            <div className="description">
                <span>ESTE DETALLE ES PARA TI :)</span>
            </div>
            <div className="button">
                <button className="botones">
                    <Link to={`/flower`}>CLICK AQUÍ</Link>
                </button>
            </div>
        </article>
    )
}
