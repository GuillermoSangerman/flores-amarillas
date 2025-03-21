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
                <span>Te amo mi Lunita</span>
            </div>
            <div className="button">
                <button id='elboton' className="bg-purple-600 rounded-xl text-[10px] ">
                    <Link to={`/flower`}>CLICK AQUÍ</Link>
                </button>
            </div>
        </article>
    )
}
