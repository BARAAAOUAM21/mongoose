const express =require('express')
const app= express()
require('dotenv').config()
const person =require("./models/personSchema")
const connectDB=require(`./config/connectDB`)
connectDB()

const addperson=async()=>{
      const housem= new person({name:'housem',age:32,favoritFood:['bsal','eggs']})
      await housem.save()
  }
//  addperson() 

 const updateperson=async()=>{
      await person.findByIdAndUpdate("61b227810e28856a1f0216ab",{$set:{name:"taha"}})
  }
 
//   updateperson()

const deleteperson=async()=>{
      await person.findByIdAndRemove("61b227810e28856a1f0216ab")
  }
//   deleteperson()

const findeperson=async()=>{
      await person.findOne({name:'housem'})
}
// findeperson()






const port= process.env.PORT || 4000
app.listen(port,(err)=>err? console.log(err):console.log(`app listing on port${port}`))