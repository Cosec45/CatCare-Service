const expressFunct = require('express')
const expressObj = expressFunct()
expressObj.use(expressFunct.json())
const mongoose = require('mongoose')
let catDb = null
let userDb = null

const cors = require('cors')

expressObj.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
)
expressObj.use(
  cors({
    origin: ['http://localhost:4200/'],
  })
)

expressObj.get('/api/cats', async function (req, res) {
  res.send(await catDb.find())
})

expressObj.get('/api/cats/:id', async function (req, res) {
  const id = req.params.id
  const result = await catDb.find()
  console.log(result)
  res.send(...result.filter((acat) => acat.id == id))
})

expressObj.post('/api/newuser', async function (req, res) {
  
  const obj = Object.assign({},req.body)
  const user = {
    fname: obj.body.name,
    lname: obj.body.lname,
    email: obj.body.email,
    phone: obj.body.phone,
    address: obj.body.address,
    massage: obj.body.massage,
  }
  userDb.create(user).then((result) => {
    console.log(result)
  
  })

  // res.send(req.body)
  res.send({"data":"สุดสวย"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
})

const port = process.env.PORT || 3000
expressObj.listen(port, async function () {
  console.log(`Listening on port: `, port)
  // mongodb://localhost:27017
  console.log('connecting ...')
  await mongoose.connect('mongodb://127.0.0.1:27017/catscareDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const catSchema = mongoose.Schema({
    // user: { type: Number },
    // balance: { type: Number },
    id: { type: Number },
    name: { type: String },
    address: { type: String },
    country: { type: String },
    gender: { type: String },
    age: { type: String },
    img: { type: String },
  })
  const userSchema = mongoose.Schema(
    {
      // user: { type: Number },
      // balance: { type: Number },

      fname: { type: String },
      lname: { type: String },
      email: { type: String },
      phone: { type: String },
      address: { type: String },
      massage: { type: String },
    },
    {
      versionKey: false, // You should be aware of the outcome after set to false
    }
  )
  console.log('connection success')
  catDb = mongoose.model('cats', new mongoose.Schema(catSchema), 'cats')
  userDb = mongoose.model(
    'user_adopt',
    new mongoose.Schema(userSchema),
    'user_adopt'
  )
})
