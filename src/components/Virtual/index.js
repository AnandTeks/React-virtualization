import React from "react";
// import { FixedSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";
// import { motion } from "framer-motion";
import Window from "../Window/index";
import './index.css'
import MyRow from './MyRow'

const Row = ({ index, style }) => (
    <tr style={style}>
        <td>Row {index}</td>
        <td>Row {index}</td>
        <td>Row {index}</td>
    </tr>

);

export default function Virutal(props:any) {
    console.log("PROPS***", props);
    return (
        <div className="App">
            {/* <table className="customers">
                <tr>
                    <th>
                        Row One
                    </th>
                    <th>
                        Row Two
                    </th>
                </tr>
            </table> */}
            <Window
                isVirtualizationEnabled={true}
                rowHeight={60}
            >
                {/* <ul> */}
                {new Array(16000)
                    .fill({})
                    .map((_, index) => ({ id: index }))
                    .map((it) => (
                        //Working solution
                        // <tr
                        //     animate={{
                        //         scale: [0.89, 1]
                        //     }}
                        //     style={{ position: 'relative', marginTop: '18%' }}
                        //     className="row"
                        //     key={it.id}
                        // >
                        //     <td>{it.id}</td>
                        //     <td>{it.id}</td>
                        // </tr>
                        // Problem
                        <MyRow id={it.id} ></MyRow>
                    ))}
                {/* </ul>
               */}
            </Window>
        </div>
    )
}


{/* <List
    className="List"
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
>
    {Row}
</List> */}