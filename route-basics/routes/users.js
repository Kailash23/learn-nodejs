const express = require("express");
const router = express.Router();

router
    .get("/", (req, res) => {
        res.send(users);
    })
    .get("/:id", (req, res) => {
        const { id } = req.params;
        const user = users.find(user => user.id == id);

        if (user) {
            res.send(user);
        } else {
            res.status(404).send(`User ${id} does not exist`);
        }
    })
    .delete("/:id", (req, res) => {
        const { id } = req.params;
        const index = users.findIndex(user => user.id == id);

        if (index > -1) {
            users.splice(index, 1);
            res.sendStatus(200);
        } else {
            res.status(404).send(`User ${id} does not exist`);
        }
    });

module.exports = router;


var users = [{
        "id": 1,
        "first_name": "Marco",
        "last_name": "Edgars",
        "email": "medgars0@illinois.edu",
        "gender": "Male",
        "ip_address": "72.192.61.196"
    }, {
        "id": 2,
        "first_name": "Aridatha",
        "last_name": "Haslewood",
        "email": "ahaslewood1@ehow.com",
        "gender": "Female",
        "ip_address": "71.3.28.138"
    }, {
        "id": 3,
        "first_name": "Dahlia",
        "last_name": "Featonby",
        "email": "dfeatonby2@networksolutions.com",
        "gender": "Female",
        "ip_address": "195.47.210.230"
    }, {
        "id": 4,
        "first_name": "Jammie",
        "last_name": "Napper",
        "email": "jnapper3@soup.io",
        "gender": "Female",
        "ip_address": "203.210.73.148"
    }, {
        "id": 5,
        "first_name": "Warner",
        "last_name": "Dearth",
        "email": "wdearth4@theguardian.com",
        "gender": "Male",
        "ip_address": "167.239.34.228"
    }, {
        "id": 6,
        "first_name": "Priscilla",
        "last_name": "Megainey",
        "email": "pmegainey5@buzzfeed.com",
        "gender": "Female",
        "ip_address": "24.205.195.88"
    }, {
        "id": 7,
        "first_name": "Lorinda",
        "last_name": "Plews",
        "email": "lplews6@jigsy.com",
        "gender": "Female",
        "ip_address": "155.197.242.38"
    }, {
        "id": 8,
        "first_name": "Renard",
        "last_name": "Hobden",
        "email": "rhobden7@multiply.com",
        "gender": "Male",
        "ip_address": "7.237.50.106"
    }, {
        "id": 9,
        "first_name": "Gusta",
        "last_name": "Meehan",
        "email": "gmeehan8@google.de",
        "gender": "Female",
        "ip_address": "91.127.128.14"
    }, {
        "id": 10,
        "first_name": "Nita",
        "last_name": "Sorby",
        "email": "nsorby9@issuu.com",
        "gender": "Female",
        "ip_address": "100.16.15.2"
    }
]