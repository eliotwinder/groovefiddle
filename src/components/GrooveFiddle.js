import React from "react";
const io = require("socket.io-client");

const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = (message) => {
    console.log(`received message ${message}`);
};

export default class GrooveFiddle extends React.Component {
    constructor(props) {
        super(props);

    }

    sendMessage() {
        console.log(socket);
        socket.send("hello");
    }

    render() {
        return (
            <div onClick={this.sendMessage}>send</div>
        );
    }
}
