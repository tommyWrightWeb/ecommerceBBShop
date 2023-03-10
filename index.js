if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}



const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

const express = require('express')

const fs = require('fs')

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())

app.get('/shop', function (req, res) {
   fs.readFile('items.json', function (error, data) {
      if (error) {
         res.status(500).end()
      } else {
         res.render('shop.html', {
            items: JSON.parse(data)
         })
      }
   })
})

app.listen(3000);