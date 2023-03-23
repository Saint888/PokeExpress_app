import React from 'react'


function New() {
    return ( 
        <div>
            <h1>New Pokemon</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="typ">Type:</label><br />
                <input type="text" id="typ" name="type" /><br /><br />

                <label htmlFor="img">Caught a photo? :</label>
                <input type="checkbox" id="img" name="image"/><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;