const express = require("express")
const mongoose = require("mongoose")

const app = express()

const uri = "mongodb+srv://admin1:aUBNlToQ39fAe7jp@cluster0.9ndjb6u.mongodb.net/"

app.set("view engine", "ejs")

app.engine("ejs", require("ejs").__express)

app.use(express.static("public"))

app.get("/", (req, res) => {
	res.render("index")
})

app.get("/adaugaprodus", (req,res) => {
	res.render("adaugaprodus")
})

app.get("/cont", (req,res) => {
	res.render("cont")
})

async function connect(){
	try{
		await mongoose.connect(uri)
		console.log("Mongodb is running")
	}catch(error){
		console.error(error)
	}
}

connect()

app.listen(3000,() => {
	console.log("Server started on port 3000")
})