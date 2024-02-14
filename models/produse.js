const mongoose = require('mongoose')

const produsSchema = new mongoose.Schema({
	denumire: String,
	tip : String,
	gramaj: Number,
	cantitate: Number,
	pret: Number,
	data : String
})

module.exports = mongoose.model("produs", produsSchema)