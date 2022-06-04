const express = require("express")
const app = express()
app.use(express.json())


app.get("/test", (req,res) => {
    res.json("hello world!")
    res.end()
})
app.get("/", (req,res) => {
    res.json("this is up! (got to /test)")
    res.end()
})
app.listen(8080, () => {
    console.log("server running")
})