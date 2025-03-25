import React from 'react'

export default class PrintableComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Printable Document</h1>
                <p>{this.props.input}</p>
            </div>
        );
    }
}