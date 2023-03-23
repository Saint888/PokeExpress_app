import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    height: '40px'
    };

function Show(props) {
    return (

        <DefaultLayout title="Pokemon:">
        <div>
            <h1 style={myStyle}>Gotta Catch 'Em All</h1>
            <h2>{props.pokemon.name}</h2>
            <br />
            <img src={props.pokemon.img} />
            <br />

            <button><a href="/pokemon">Back</a></button>
        </div>
        </DefaultLayout>
    )
}

export default Show;