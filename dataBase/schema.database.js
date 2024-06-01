import mongoose from "./connection.database.js"


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    role:{
        type:String,
        required:[true,'Role is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
})

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    content:{
        type:String,
        required:[true,'Content is required']
    },
    author:{
        type:String,
        required:[true,'Author is required']
    },
    date:{
        type:String,
        required:[true,'Date Created is required']
    }

})

export const userModel = mongoose.model('NodeConnection1',userSchema)
export const blogModel = mongoose.model('NodeConnection2',blogSchema)

