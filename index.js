const express = require('express')
const app = express()
const port = 3000

app.get('/secret/:password', function(req, res)  {
    if (req.params.password !== 'asdfasdf'){
        return res.status(403).send('You are dumbbbb.')
    }
    res.send('Hello World!'+Math.random())
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))