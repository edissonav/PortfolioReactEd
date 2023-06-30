import React, { Component } from 'react';
import Pdf from '../assets/docs/Curriculum Edisson Avila ingles.pdf'

class Cv extends Component {
componentDidMount() {
    if (typeof window.orientation !== "undefined"){
            document.getElementById('Downloadpdf').click();
            window.close();
    }
}

    render() {
        return (
            <div style={{position: 'absolute', width: '100%',height: '100%'}}>
                <object
                 data={Pdf} 
                type="application/pdf" 
                width="100%"
                height="100%">
                        <a href={Pdf} id="Downloadpdf"
                        download="CVEdissonAvila.pdf">Tu dispositive cann't reach the Pdf documents, 
                        click here to download</a>
                </object>
                
            </div>
        );
    }
}

export default Cv;