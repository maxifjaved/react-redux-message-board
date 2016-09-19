export const sendMessage = ( message ) => {
	return({
		type : 'SAVE_MESSAGE',
		payload : message
	} );
};

export const deleteMessage = ( message ) => {
	return({
		type : 'DELETE_MESSAGE',
		payload : message
	} );
};
