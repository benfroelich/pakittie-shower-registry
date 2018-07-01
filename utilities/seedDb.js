require("mongoose");
var RegistryEntry = require("../models/registryEntry");
var seeds = [
    // 36 + handmade
    {item: "handmade goods", imgUrl: "/img/diy.jpg", link: "#", quantity: Number.POSITIVE_INFINITY}, 
    {item: "wipes", imgUrl: "", link: "#", quantity: 4}, 
    {item: "Infant car seat", imgUrl: "/img/car-seat.jpg", link: "#"}, 
    {item: "Convertible car seat", imgUrl: "", link: "#"}, 
    {item: "Booster Seat", imgUrl: "", link: "#"}, 
    {item: "Stroller", imgUrl: "", link: "#"}, 
    {item: "Diaper Bag", imgUrl: "", link: "#"}, 
    {item: "Bottles", imgUrl: "", link: "#"}, 
    {item: "Bottle Brush", imgUrl: "", link: "#"}, 
    {item: "Walker", imgUrl: "", link: "#"}, 
    {item: "Baby Sling", imgUrl: "", link: "#"}, 
    {item: "SKIP*HOP Moby Softspot Baby Sink Bather", imgUrl: "", link: "#"}, 
    {item: "Imagine Baby Products Newborn Stay Dry All-In-One Hook and Loop Cloth Diaper, Trumpet", imgUrl: "", link: "#", quantity: 3}, 
    {item: "Bambino Mio, Miosolo All-In-One Cloth Diaper, Onesize", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/815LU886jVL._SX522_.jpg", link: "#", quantity: 3}, 
    {item: "ALVABABY Pocket Cloth Diapers Washable Adjustable One Size", imgUrl: "", link: "#", quantity: 3}, 
    {item: "OsoCozy prefolds", imgUrl: "", link: "#", quantity: 3}, 
    {item: "Snappi Cloth Diaper Fasteners", imgUrl: "", link: "#"}, 
    {item: "Changing Pad Cover", imgUrl: "", link: "#"}, 
    {item: "Swaddle Blankets/Blankets", imgUrl: "", link: "#", quantity: 3}, 
    {item: "Baby wash and shampoo", imgUrl: "", link: "#"}, 
    {item: "Diaper Rash Ointment",imgUrl: "",link: "#", quantity: 2},
    {item: "Pacifier", imgUrl: "", link: "#"},
    {item: "Nail clipper and nail filer", imgUrl: "", link: "#"},
    {item: "Automatic Bouncer/Auto rock and play sleeper", imgUrl: "", link: "#"},
    {item: "Wash cloths", imgUrl: "", link: "#"}
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