const Soldier = require('../models/soldiers-model')

soldierCreate = (req, res) => {
    let body = req.body

    if (!body) {

        
        res.send({error:'No body'})
    }

    let soldier = new Soldier(body)
   
    if (!soldier) {
        
        res.send({error:'No soldier'})
    } else {
       
        // res.send('success')

        soldier.save()
            .then(doc => {
                res.send(doc)

            }).catch(error => {
               
                res.send(error)
            })
    }
}

module.exports = {soldierCreate}