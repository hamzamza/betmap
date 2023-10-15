import mongoose from "mongoose";
const { Schema } = mongoose;

const Citesschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imgsrc: {
        type: String,
        required: true
    }
    , details: {
        type: String,
        required: false
    }
});
export default mongoose.model("Cities", Citesschema);
