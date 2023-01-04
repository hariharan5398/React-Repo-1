import React from 'react'

export default function Filter(){


    return(
        <div className='Filter'>
            <h1>Filter Details</h1>
            <label for="priority">Priority</label>
            <select name='priority' id="priority">
                <option value={"All"}>All</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
            </select>
            <p></p>
            <label for="category">Category</label>
            <select name='category' id="category">
                <option value={"All"}>All</option>
                <option value={"UI"}>UI</option>
                <option value={"Incidents"}>Incidents</option>
                <option value={"Functional"}>Functional</option>
                <option value={"Change Request"}>Change Request</option>

            </select>

        </div>
    )
}