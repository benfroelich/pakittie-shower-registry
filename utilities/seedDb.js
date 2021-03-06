require("mongoose");
var RegistryEntry = require("../models/registryEntry");
var seeds = [
    {item: "handmade goods", imgUrl: "/img/diy.jpg", link: "#", quantity: Number.POSITIVE_INFINITY}, 
    {item: "Swaddle Blankets/Blankets", imgUrl: "/img/swaddling.jpg", link: "#", quantity: 3}, 
    {item: "Automatic Bouncer/Auto rock and play sleeper", imgUrl: "/img/rocker.jpeg", link: "#"},
    {item: "Wash cloths", imgUrl: "/img/towels.png", link: "#"},
    {item: "wipes", imgUrl: "/img/wipes.jpg", link: "#", quantity: 4}, 
    {item: "Convertible car seat", imgUrl: "/img/convertible-car-seat.jpeg", link: "#"}, 
    {item: "Booster Seat", imgUrl: "/img/booster-seat.jpg", link: "#"}, 
    {item: "Stroller", imgUrl: "/img/stroller.jpg", link: "#"}, 
    //{item: "Diaper Bag", imgUrl: "/img/diaper.jpeg", link: "#"}, 
    {item: "Bottles", imgUrl: "/img/bottle.jpg", link: "#"}, 
    //{item: "Bottle Brush", imgUrl: "/img/bottle-brush.jpeg", link: "#"}, 
    {item: "Walker", imgUrl: "/img/walker.jpg", link: "#"}, 
    {item: "Baby Sling", imgUrl: "/img/sling.jpg", link: "#"}, 
    {item: "SKIP*HOP Moby Softspot Baby Sink Bather", imgUrl: "/img/hop-bather.jpeg", link: "#"}, 
    {item: "Imagine Baby Products Newborn Stay Dry All-In-One Hook and Loop Cloth Diaper, Trumpet", imgUrl: "/img/imagine.jpg", link: "#", quantity: 3}, 
    {item: "Bambino Mio, Miosolo All-In-One Cloth Diaper, Onesize", imgUrl: "/img/mio.jpg", link: "#", quantity: 3}, 
    {item: "ALVABABY Pocket Cloth Diapers Washable Adjustable One Size", imgUrl: "/img/alvababy-diapers.jpg", link: "#", quantity: 3}, 
    //{item: "OsoCozy prefolds", imgUrl: "/img/osocozy.jpg", link: "#", quantity: 3}, 
    //{item: "Snappi Cloth Diaper Fasteners", imgUrl: "/img/diaper-fasteners.jpg", link: "#"}, 
    {item: "Changing Pad Cover", imgUrl: "/img/diaper-pad.jpg", link: "#"}, 
    {item: "Baby wash and shampoo", imgUrl: "/img/shampoo.jpg", link: "#"}, 
    {item: "Diaper Rash Ointment",imgUrl: "/img/ointment.jpeg",link: "#", quantity: 2},
    //{item: "Pacifier", imgUrl: "/img/pacifier.jpeg", link: "#"},
    //{item: "Nail clipper and nail filer", imgUrl: "/img/nail-clipper.jpeg", link: "#"},
    {item: "Newborn clothes", imgUrl: "/img/newborn-clothes.jpg", link: "#", quantity: 2},
    {item: "3-6 month clothes", imgUrl: "/img/three-to-six-month-clothes.jpg", link: "#", quantity: 2},
    {item: ">6 month clothes", imgUrl: "/img/six-plus-month-clothes.jpg", link: "#", quantity: 2},
    {item: "Crib sheets", imgUrl: "/img/crib-sheet.jpg", link: "#"},
    {item: "Baby healthcare kit", imgUrl: "/img/baby-healthcare-kit.jpg", link: "#"}
];
function seedDb() {
    RegistryEntry.remove({}, function(err) {
        if(err) console.log(err);
        else {
            console.log("remove and apply registry entries");
            seeds.forEach(function(seed) {
                RegistryEntry.create(seed, function(err, newEntry) {
                    if(err) console.log(err);
               });
            });
        }
    });
}

function updateInDb() {
    console.log("updating items in database");
    seeds.forEach(function(seed) {
        RegistryEntry.findOneAndUpdate({item: seed.item}, seed, function(error) {
            if(error) console.log(error);
        });
    });
}

function addToDb() {
    console.log("adding new items to database");
    seeds.forEach(function(seed) {
        RegistryEntry.create(seed, function(err, newEntry) {
            if(err) console.log(err);
       });
    });
}

module.exports = process.env.SEED_DB == "REDO" ? seedDb : addToDb;
