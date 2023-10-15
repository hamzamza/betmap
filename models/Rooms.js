import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        hotelId: { type: String, required: true }
        ,
        desc: {
            type: String,
            required: true,
        },
        roomNumbers: [{ number: Number, unavailableDates: { type: [Date], default: [new Date("2022-09-08"), new Date("2022-09-02"), new Date("2022-09-10")] } }],
    },
    { timestamps: true }
);





export default mongoose.model("Room", RoomSchema);  
