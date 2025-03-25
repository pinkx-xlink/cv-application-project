import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

export default function PrintComponent() {
    let componentRef = useRef();
    return (
        <>
            <div>
                <ReactToPrint
                  trigger={() => <Button>Print!</Button>}
                  content={() => componentRef}
                />

                {/* comp to be printed */}
                <ComponentToPrint ref={(el) => (componentRef = el)} />
            </div>
        </>
    )
    
}

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div>
                <h1>Printable Document</h1>
            </div>
        );
    }
}