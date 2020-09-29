const express = require("express");
const {Station} = require("../models/station");
const router = express.Router();

//create station
router.post("/api/stations", (req, res, next) => {
    const newStation = new Station({
        name : req.body.name,
        address : req.body.address,
        province: req.body.province
    })

    newStation.save()
    .then(station => res.status(200).json(station))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
