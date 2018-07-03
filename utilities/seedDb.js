require("mongoose");
var RegistryEntry = require("../models/registryEntry");
var seeds = [
    // 36 + handmade
    {item: "handmade goods", imgUrl: "/img/diy.jpg", link: "#", quantity: Number.POSITIVE_INFINITY}, 
    {item: "wipes", imgUrl: "/img/wipes.jpg", link: "#", quantity: 4}, 
    {item: "Infant car seat", imgUrl: "/img/car-seat.jpg", link: "#"}, 
    {item: "Convertible car seat", imgUrl: "/img/convertible-car-seat.png", link: "#"}, 
    {item: "Booster Seat", imgUrl: "/img/booster-seat.png", link: "#"}, 
    {item: "Stroller", imgUrl: "/img/stroller.jpg", link: "#"}, 
    {item: "Diaper Bag", imgUrl: "diaper.jpeg", link: "#"}, 
    {item: "Bottles", imgUrl: "bottle.png", link: "#"}, 
    {item: "Bottle Brush", imgUrl: "bottle-brush.jpeg", link: "#"}, 
    {item: "Walker", imgUrl: "walker.png", link: "#"}, 
    {item: "Baby Sling", imgUrl: "sling.jpg", link: "#"}, 
    {item: "SKIP*HOP Moby Softspot Baby Sink Bather", imgUrl: "hop-bather.jpeg", link: "#"}, 
    {item: "Imagine Baby Products Newborn Stay Dry All-In-One Hook and Loop Cloth Diaper, Trumpet", imgUrl: "imagine.jpg", link: "#", quantity: 3}, 
    {item: "Bambino Mio, Miosolo All-In-One Cloth Diaper, Onesize", imgUrl: "mio.jpg", link: "#", quantity: 3}, 
    {item: "ALVABABY Pocket Cloth Diapers Washable Adjustable One Size", imgUrl: "alvababy-diapers.jpg", link: "#", quantity: 3}, 
    {item: "OsoCozy prefolds", imgUrl: "osocozy.jpg", link: "#", quantity: 3}, 
    {item: "Snappi Cloth Diaper Fasteners", imgUrl: "diaper-fasteners.jpg", link: "#"}, 
    {item: "Changing Pad Cover", imgUrl: "diaper-pad.jpg", link: "#"}, 
    {item: "Swaddle Blankets/Blankets", imgUrl: "swaddling.jpg", link: "#", quantity: 3}, 
    {item: "Baby wash and shampoo", imgUrl: "shampoo.jpg", link: "#"}, 
    {item: "Diaper Rash Ointment",imgUrl: "ointment.jpeg",link: "#", quantity: 2},
    {item: "Pacifier", imgUrl: "pacifier.jpeg", link: "#"},
    {item: "Nail clipper and nail filer", imgUrl: "nail-clipper.jpeg", link: "#"},
    {item: "Automatic Bouncer/Auto rock and play sleeper", imgUrl: "rocker.jpeg", link: "#"},
    {item: "Wash cloths", imgUrl: "towels.png", link: "#"}
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