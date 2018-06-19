require("mongoose");
var RegistryEntry = require("../models/registryEntry");
var seeds = [
        {
            item: "crib",
            imgUrl: "https://images.crateandbarrel.com/is/image/Crate/Crib_Anderson_Nat_V1",
            link: "#",
            from: ""
            
        }, 
        {
            item: "cloth diapers",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJum7xuVLi8wrCqPbVqZcWFQnX92HGwdG4hXZ0XypWY_99BhOeKA",
            link: "#",
            from: ""
        },
        {
            item: "bottles",
            imgUrl: "",
            link: "#",
            from: ""
        },
        {
            item: "baby stuff",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJum7xuVLi8wrCqPbVqZcWFQnX92HGwdG4hXZ0XypWY_99BhOeKA",
            link: "#",
            from: "Obama",
            claimed: true
        }
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