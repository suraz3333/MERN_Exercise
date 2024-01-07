const express = require ('express')
const app = express()
app.use (express.json())
const PORT =3001
let contact=[
    {"id":1,
    "name":"Arto Hellas",
    "number":"2344"
    },
    {
        "id":2,
        "name":"Ada lovelace",
        "number":"23490904"
    },
    {
        "id":3,
        "name":"Dan Abromove",
        "number":"23490904" 
    }
]
// Exercise 1 Implement a Node application that returns a hardcoded list of phonebook entries from
// the address 
app.get(`/api/persons`,(request,response)=>
    {response.json(contact)})
app.listen(PORT,()=>console.log(`Server running on ${PORT}`))