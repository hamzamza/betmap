import hotel from "../models/hotel.js";
import Cities from "../models/Cities.js";

// create
const createHotel = async (req, res) => {

    const body = req.body
    console.log("hello")
    console.log(body);
    const thehotel = await hotel.create(body)
    console.log(thehotel);
    res.status(200).json(thehotel)


}

// update
const updateHotel = async (req, res) => {
    const body = req.body
    
    const updatedhotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { returnDocument: "after" })
    console.log(updatedhotel);
    res.status(200).json("hotel updated successfully")

}

const deleteall = async (req, res) => {
    await hotel.deleteMany({})
    res.send("done")
}
// get one hotel
const gethHotel = async (req, res) => {
    const id = req.params.id
    const onehotel = await hotel.findById(id)
    res.status(200).json(onehotel)

}

// get muultiple hotels

const getHotels = async (req, res) => {
    const { min, max, ...others } = req.query
    const { city } = others
    let hotels
    if (city === "everywhere"|| !city) {
        hotels = await hotel.find({}).limit(req.query.limit)
    }
    else { hotels = await hotel.find({ ...others, city:city.toLowerCase(), cheapestPrice: { $gt: min || 1, $lt: max || 400 } }).limit(req.query.limit) }
    res.status(200).json(hotels)
}
const deleteHotel = async (req, res) => {
    const id = req.params.id
    const deletedhotel = await hotel.findByIdAndDelete(id)
    res.status(200).json(deletedhotel)
}

const countByType = async (req, res) => {

    const hotels = await hotel.countDocuments({ type: "hotel" })
    const apartements = await hotel.countDocuments({ type: "apartement" })
    const resorts = await hotel.countDocuments({ type: "resort" })
    const villas = await hotel.countDocuments({ type: "villa" })
    const cabins = await hotel.countDocuments({ type: "cabin" })

    res.status(200).json([{ type: "hotels", number: hotels },
    { type: "apartements", number: apartements },
    { type: "resorts", number: resorts },
    { type: "villas", number: villas }, { type: "cabins", number: cabins }
    ])

}


const countByCity = async (req, res) => {
    const cities = req.query.cities.split(",")

    const citiesbynumber = await Promise.all(cities.map((city) => {
        const number = hotel.countDocuments({ city: city })
        return number
    }

        // Promise.all user in case of an array of promises so it wait intel all the array get the response 
    ))
    const srcimgarry = await Promise.all(cities.map((city) => {
        const src = Cities.findOne({ name: city })
        return src
    }))
    const c = citiesbynumber.map((element, index) => {
        return { city: cities[index], number: element, imgsrc: srcimgarry[index].imgsrc }
    })

    console.log(srcimgarry);

    res.status(200).json(c)
}

export { updateHotel, createHotel, gethHotel, getHotels, deleteHotel, deleteall, countByType, countByCity }