const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/todos",(req, res) => {
    
})

app.get("/todos/todoId", (req,res) => {

})

app.post("/todo", (req, res) => {

})

app.put("/completed", (req, res) => {

})

app.delete("/todos/todoId", (req, res) => {

})

app.listen(port, () => `Listening on port ${port}`)