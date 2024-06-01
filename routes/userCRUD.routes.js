import express from "express"
import {verifyToken} from '../middleware/verifyToken.js'
import { addBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/userCRUD.js"

const router = express.Router()

router.get('/getallBlogs',getAllBlogs)
router.get('blog/:id',getBlogById)
router.post('/createblog',verifyToken,addBlog)
router.put('/edit/:id',verifyToken,updateBlog)
router.delete('/delete/:id',verifyToken,deleteBlog)



export default router