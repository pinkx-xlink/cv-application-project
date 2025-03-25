import React, {Component, PropTypes} from "react";
import { html2canvas, jsPDF } from "app/ext";
export default class Export extends Component {
    constructor(props) {
        super(props);
    }

    printDocument() {
        const printInput = document.getElementById('divToPrint');
        html2canvas(printInput)
          .then((canvas) => {
            const imgData = canvas.toDataURL('images/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
          });
    }

    render() {
        return (<div>
            <div className="mb5">
              <button onClick={this.printDocument}>Print</button>
            </div>
            <div id="divToPrint" className="mt4" {...css({
              backgroundColor: '#f5f5f5',
              width: '210mm',
              minHeight: '297mm',
              marginLeft: 'auto',
              marginRight: 'auto'
            })}>
              <div>Note: Here the dimensions of div are same as A4</div> 
              <div>You Can add any component here</div>
            </div>
          </div>);
    }
}