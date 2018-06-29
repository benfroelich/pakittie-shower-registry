require("mongoose");
var RegistryEntry = require("../models/registryEntry");
var seeds = [
    {item: "handmade goods", imgUrl: "/img/diy.jpg", link: "#", from: ""}, 
    {item: "wipes", imgUrl: "", link: "#", from: ""}, 
    {item: "Infant car seat", imgUrl: "/img/car-seat.jpg", link: "#", from: ""}, 
    {item: "Convertible car seat", imgUrl: "", link: "#", from: ""}, 
    {item: "Stroller", imgUrl: "", link: "#", from: ""}, 
    {item: "Diaper Bag", imgUrl: "", link: "#", from: ""}, 
    {item: "Bottles", imgUrl: "", link: "#", from: ""}, 
    {item: "Bottle Brush", imgUrl: "", link: "#", from: ""}, 
    {item: "Walker", imgUrl: "", link: "#", from: ""}, 
    {item: "Booster Seat", imgUrl: "", link: "#", from: ""}, 
    {item: "Baby Sling/Catapult", imgUrl: "", link: "#", from: ""}, 
    {item: "SKIP*HOP Moby Softspot Baby Sink Bather", imgUrl: "", link: "#", from: ""}, 
    {item: "Bambino Mio, Miosolo All-In-One Cloth Diaper, Onesize", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/815LU886jVL._SX522_.jpg", link: "#", from: ""}, 
    {item: "ALVABABY Pocket Cloth Diapers Reusable Washable Adjustable One Size for Baby Boys and Girls 6 Pack with 12 Inserts 6DM26", imgUrl: "", link: "#", from: ""}, 
    {item: "Imagine Baby Products Newborn Stay Dry All-In-One Hook and Loop Cloth Diaper, Trumpet", imgUrl: "", link: "#", from: ""}, 
    {item: "OsoCozy prefolds", imgUrl: "", link: "#", from: ""}, 
    {item: "Snappi Cloth Diaper Fasteners", imgUrl: "", link: "#", from: ""}, 
    {item: "Changing Pad Cover", imgUrl: "", link: "#", from: ""}, 
    {item: "Swaddle Blankets/Blankets", imgUrl: "", link: "#", from: ""}, 
    {item: "Baby wash and shampoo", imgUrl: "", link: "#",}, 
    {item: "Diaper Rash Ointment",imgUrl: "",link: "#",},
    {item: "Pacifier", imgUrl: "", link: "#"},
    {item: "Nail clipper and nail filer", imgUrl: "", link: "#",}
];
function seedDb() {
    RegistryEntry.remove({}, function(err) {
        if(err) console.log(err);
        else {
            console.log("remove registry entries");
            seeds.forEach(function(seed) {
                RegistryEntry.create(seed, function(err, newEntry) {
                    if(err) console.log(err);
                    else 
                    {
                        console.log("created new entry:");
                        console.log(newEntry);
                    }
               });
            });
        }
    });
}

module.exports = seedDb;