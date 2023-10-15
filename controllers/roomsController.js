
import Hotel from "../models/hotel.js";
import er from "../errors/createError.js"
import Rooms from "../models/Rooms.js";

const { createError } = er
// create
const createRoom = async (req, res) => {
    const hotelId = req.params.id
    const body = req.body;
    const room = { hotelId: hotelId, ...body }
    const theroom = await Rooms.create(room);
    const roomid = theroom._id.toString()
    const hotelafterupdate = await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: roomid } }, { returnDocument: "after", new: true })
    console.log(theroom._id.toString());
    console.log(hotelafterupdate);
    res.status(200).json(theroom);

};
// update
const updateRoom = async (req, res) => {
    const body = req.body;

    const updatedroom = await Rooms.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { returnDocument: "after", new: true }
    );
    console.log(updatedroom);
    res.status(200).json("room updated successfully");
};

// get one room
const getRoom = async (req, res) => {
    const id = req.params.id;
    const onehotel = await Rooms.findById(id);
    res.status(200).json(onehotel);
};

// get muultiple hotels

const getRooms = async (req, res) => {
    const rooms = await Rooms.find({});
    res.status(200).json(rooms);
};
const deleteRoom = async (req, res) => {
    const id = req.params.id;
    const room = await Rooms.findById(id)
    await Hotel.findByIdAndUpdate(room.hotelId, { $pull: { rooms: id } })
    res.status(200).json({ roomdeletedId: id, hotelid: room.hotelId });
};

const getHotelrooms = async (req, res) => {
    const id = req.params.id
    console.log(id);
    const hotel = await Hotel.findById(id)
    const list = await Promise.all(hotel.rooms.map(
        (roomId) => {
            return Rooms.findById(roomId)
        }
    ))
    console.log(list);
    res.status(200).json(list)

}
const updateRoomunvailablity = async (req, res) => {
    // id , number 

    const id = req.params.id
    const numberId = req.query.numberId
    const { dates } = req.body
   
    console.log(dates);
    const room = await Rooms.findById(id)


    let roomnuber = room.roomNumbers.filter(item => item._id == numberId)
    const otherrooms = room.roomNumbers.filter(item => item._id != numberId)
    // === signifie la comparaison avec les objet est ces types
    // == comparaison just par le return quelquesoit son type
    console.log(roomnuber);
    const alldates = [...dates.map((d) => new Date(d)), ...roomnuber[0].unavailableDates]


    console.log(alldates);


    const newromnumber = { ...roomnuber[0]._doc, unavailableDates: alldates }
    console.log(newromnumber);
    const roomnumbers = [...otherrooms, newromnumber]
    await Rooms.findByIdAndUpdate(id, { roomNumbers: roomnumbers })
    res.json()
}
export { updateRoom, createRoom, getRoom, getRooms, deleteRoom, getHotelrooms, updateRoomunvailablity };



