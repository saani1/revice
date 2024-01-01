import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        orderPrice: {
            type: String,
            required: true
        },
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        address: [
            {
                pincode: {
                    type: Number,
                    required: true
                },
                phonenumber: {
                    type: Number,
                    default: +92,
                    required: true
                },
                region: {
                    type: String,
                    required: true
                },
                fulladdress: {
                    type: String,
                    required: true
                }
            }
        ],
        status: {
            type: String,
            enum: ["Pending","Canceled","Delivered"],
            default: "Pending",
            required: true
        }
    },
    {timestamps: true}
)

export const user = mongoose.model("User", userSchema)