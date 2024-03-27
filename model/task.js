const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username:{
		type: String,
		required: true
		
	},
	Email:{
		type: String,
		required: true,
		lowercase: true

	},
	Password:{
		type: String,
		required: true,
		lowercase: false
	
	}
})

const userModel = mongoose.model("userSchema",userSchema);

module.exports = userModel;