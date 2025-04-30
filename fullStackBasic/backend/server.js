import express from 'express'

const app = express();

// app.get('/', (req , res)=>{
//    res.send('server start')
// })

app.get('/api/jokes',(req , res) =>{
    const jokes = [
       {
        id :1,
        title: 'a joke',
        content : 'this is a joke'
       },
       {
        id :2,
        title: 'another joke',
        content : 'this is another joke'
       },
       {
        id :3,
        title: 'a third joke',
        content : 'this third is a joke'
       },
       {
        id :4,
        title: 'a fourth joke',
        content : 'this is fourth a joke'
       },
       {
        id :5,
        title: 'a joke',
        content : 'this is fiftha joke'
       },
    ]
    res.send(jokes);

})
const port  = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})