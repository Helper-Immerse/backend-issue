import mongoose from "mongoose"
export const connectDB = async () => {
    mongoose.set('strictQuery', true);
    const { connection } = await mongoose.connect("mongodb+srv://helperimmerse:tb2ZCuXGU5yFlWDF@cluster0.m4rpepl.mongodb.net")
    console.log(`MongoDB Connected with ${connection.host} `)
}