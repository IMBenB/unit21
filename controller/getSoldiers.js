const Soldier = require('../models/soldiers-model')

getSoldiers = (req, res) => {
     Soldier.find({}, (err, Soldier) => {
        if (err) {
            return res.status(200).json({ success: false, error: err })
        }
        if (Soldier.length == 0) {
             return res
                .status(200)
                .json({ success: false, error: `Soldiers not found` })
        }
        return res.status(200).json({ success: true, data: Soldier })
    }).catch(err => console.error(err))
}

module.exports = { getSoldiers }