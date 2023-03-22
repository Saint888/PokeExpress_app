import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <DefaultLayout title="Pokedex">

        <div >
            <h1 style={myStyle}>See All The Pokemon!</h1>
            </div>
            <div>
           <ul>
                {props.pokemon.map((pokemon, index) => 
                    <li key={index}>
                       <a href={`/pokemon/${index}`}><strong>{pokemon.name}</strong></a> 
                    </li>
                )}
            </ul> 
    
         </div>
         </DefaultLayout>
        
    )
}

export default Index



