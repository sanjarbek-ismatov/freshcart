import mongoose, {Schema} from "mongoose";
import {AdminType} from "../types";

const adminSchema: Schema<AdminType> = new mongoose.Schema({
    login: {type: String, unique: true},
    password: String
})
const Admin = mongoose.model<AdminType>('Admin', adminSchema)

export default Admin