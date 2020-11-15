import React from 'react';
// Import React FilePond
// eslint-disable-next-line no-unused-vars
//import { FilePond } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import './imgSelect.css';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`




export default class ImageSelect extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            reset:true
        }
    }

    open(e){
        e.preventDefault();

        const dbox = document.getElementById("d-box");
        const home_page     = document.getElementById("home_page");
        home_page.style.display="none";
        dbox.style.display="block";
    }
    render(){

        return (
            <>
                <div  className="cross_dropdown_img">
                    <span onClick={this.open.bind(this)}>{this.props.icon}</span>
                </div>
            </>
        );
    }
}

/*
*  <div  className="cross_dropdown-content_img">
                        <FilePond
                            onprocessfile={(error,file)=>{
                                //done uploading
                               this.resetAll();
                            }}

                            onerror={(err)=>{
                                alert(err.body+"-upload file failed");
                                this.resetAll();
                            }}

                            allowMultiple={false}
                            server="/api"
                            name="img"

                            labelIdle={x}
                             />
                    </div>
* */