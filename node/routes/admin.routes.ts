import express from 'express'

const adminRouter = express.Router()
adminRouter.post('/createcategory', async (req, res) => {
    res.send('create category')
})
export default adminRouter