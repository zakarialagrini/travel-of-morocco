import Mountain1 from "../BOOK/jamaa.jpg" 
import Mountain2 from "../BOOK/souk.jpg"
import Mountain3 from "../BOOK/tanja3.jpg"
import Mountain4 from "../BOOK/tanja4.jpg"
import { Component } from "react";
import "./DestinationStyles.css";


export const image = [Mountain1, Mountain2, Mountain3, Mountain4]


class DestinationData extends Component{
    render(){
        return(

            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>

            </div>

            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
                <img alt="img" src={this.props.img3}/>
                <img alt="img" src={this.props.img4}/>
            </div>
            </div>

        )
    }
}
export default DestinationData;