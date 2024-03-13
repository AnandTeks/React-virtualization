import React from "react";
function MyRow(props) {
    console.log(props)
    return <>
        <tr
            key={props.id}
        >
            <td>{props.id}</td>
            <td>{props.id}</td>
        </tr>
        </>
}

export default MyRow;