import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from './container';
import { sendMessage, deleteMessage } from "../actions/index.js";

function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps( dispatch ){
	return ({
		saveMessge : ( message ) => {
			dispatch( sendMessage( message ));
		},
		removeMessge : ( message ) => {
			dispatch( deleteMessage( message ));
		},
	});
};

const App = connect( mapStateToProps, mapDispatchToProps )( Container );
export default App;