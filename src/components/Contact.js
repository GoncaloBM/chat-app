import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.initialOnline
    };
  }

  render() {
    return (
      <div className="Contact" onClick = {() =>{
        this.setState({
          online : !this.state.online
        })
      }}>
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div className="info">
          <div className="name">{this.props.name}</div>
          <div className="status">
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <div className="status-text">
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
