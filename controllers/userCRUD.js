import { blogModel } from "../dataBase/schema.database.js"

export const getAllBlogs = async(req,res)=>{
    try{ 
        let blogs = await blogModel.find()
        res.status(200).send({
            message:"Blogs fetched successfully",
            blogs
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Internal server error"
        })
    }
}


export const getBlogById = async(req,res)=>{
    try{
        const blogId = req.params.id;
        let blog = await blogModel.findOne({_id:blogId})

        if(!blog){
            return res.status(400).json({message:"Blog with given ID doesnt exist"})
        }

        return res.status(200).json(blog)

    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const addBlog = async(req,res)=>{
    try{
        if(req.role !== "admin"){
            return res.status(403).json({message:"Only admin can add blog"})
        }

        const newBlog = await blogModel.create(req.body)
        
        return res.status(200).json({message:"Blog created successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateBlog = async(req,res)=>{
    try{
        if(req.role != "admin"){
            return res.status(403).json({message:"Only admins can edit the blogs"})
        }

        let blog = await blogModel.findOne({_id:req.params.id})
         if(blog){
             await blogModel.updateOne({_id:req.params.id},{$set:req.body})
             res.status(200).send({
                 message:"Blog Edited successfully"
             })
         }
     }
     catch(error){
         console.log(error)
         res.status(500).send({
             message:"Internal Server Error"
         })
     }
}

export const deleteBlog = async(req,res)=>{
    try{
        if(req.role != "admin"){
            return res.status(403).json({message:"Only admins can delete the blog"})
        }

        let deletedBlog = await blogModel.findOne({_id:req.params.id})
        if(deletedBlog)
        {
            await deletedBlog.deleteOne({_id:req.params.id})
            res.status(200).send({
                message:"blog deleted successfully"
            })
        }
     }
     catch(error){
         console.log(error)
         res.status(500).send({
             message:"Internal Server Error"
         })
     }
}

