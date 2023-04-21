import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    login: {type: String, unique: true},
    password: String
})
const Admin = mongoose.model('Admin', adminSchema)

export default Admin