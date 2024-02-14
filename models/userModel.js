const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required : [true, "Adauga un nume"]
	}
})

const User = mongoose.model("User", userSchema)

module.exports = User