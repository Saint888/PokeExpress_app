import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {
    return (

        <DefaultLayout title="Pokemon:">
        <div>
            <h1>{props.pokemon.name}</h1>

            {/* <p>The <strong>{props.fruit.name}</strong> {props.fruit.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
            <p>Its color is <span style={{ color: props.fruit.color }}>{props.fruit.color}</span></p> */}
            <br />
            <img src={props.pokemon.img} />
            <br />

            <button><a href="/pokemon">Back</a></button>
        </div>
        </DefaultLayout>
    )
}

export default Show;