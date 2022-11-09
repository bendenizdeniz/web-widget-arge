import React, { useState } from 'react'
import ReactDOMServer from 'react-dom/server';

import PROCESS_TYPES from './PROCESS_TYPES.json';
import './Dashboard.css';
import { WidgetFlow } from './WidgetFlow';

export const Dashboard = () => {

    const [operationType, setOperationType] = useState();

    const htmlContent = () => {
        var operations = "<h1>Servicestone Web Widget</h1></br>";

        for (const iterator of Object.keys(PROCESS_TYPES.processTypes)) {
            operations +=
                `
                <input type="radio" id="example" /> 
                <label for="example">${iterator}</label>
                </br></br>
                `
                ;
        }

        operations += `
            <button className="submitOperationType value="operationType" onClick={()=> {setOperationType()}}>Submit</button>
        `
        return operations;
    }

    const widgetFlow = () => {
        return (
            <WidgetFlow />
        );
    }

    return (
        <>
            <div className="iframe-wrapper">
                <iframe srcDoc={operationType ? htmlContent() : ReactDOMServer.renderToString(widgetFlow())} width="350" height="500"></iframe>
                {/* <iframe src='https://base.stoneity.com/servicestone/' width="350" height="500"></iframe> */}
            </div>
        </>
    )
}
