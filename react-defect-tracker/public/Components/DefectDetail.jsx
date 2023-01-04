import Recat from 'react'


export default function Details(){


    return(
        <div className='details'>
        <h1>Defect Details</h1>
        <p>Search Results : 3</p>
        <table>
            <tr>
                <th>Defect Category</th>
                <th>Description </th>
                <th>Priority</th>
                <th>Status</th>
                <th>Change Status</th>
            </tr>
            <tr>
                <td>UI</td>
                <td>SUbmit Button Coming to the rear left, Refer the screenshots</td>
                <td>2</td>
                <td>Open</td>
                <td>Close Defect</td>
            </tr>
            <tr>
                <td>Functional</td>
                <td>While submitting the frm, confirmation popup should appear. Refer the srs screenshot</td>
                <td>1</td>
                <td>Open</td>
                <td>Close Defect</td>
            </tr>
            <tr>
                <td>Change Request</td>
                <td>Add Remove user FUnctionality</td>
                <td>3</td>
                <td>Closed</td>
                <td>No Action Pending</td>
            </tr>
        </table>
        </div>
    )
}