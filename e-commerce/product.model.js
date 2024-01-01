import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            uppercase: true
        },
        description: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)

export const Product = mongoose.model("Product", productSchema)