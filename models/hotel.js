import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: { type: String, require: true },
    city: {
        type: String,
        required: true,
    },
    address:
    {
        type: String,
        required: true
    }
    , photos: {
        type: [String]
    },
    title: {
        type: String,
        required: true
    }
    , desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: false,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});
export default mongoose.model("Hotel", HotelSchema);
