module.exports = {
    getUserCredentials: (req, res, next) => {
        const db = req.app.get('db')
        db.get_user_credentials(req.params.id)
            .then(data => {
                res.status(200).send(data)
            }).catch(() => res.status(500).send('Could not retrieve user credentials'));
    },

    getAllAnimals: (req, res, next) => {
        const db = req.app.get('db')
        db.get_all_animals()
        .then(data => {
            res.status(200).send(data)
        }).catch(() => res.status(500).send('Could not retrieve animals'));
    },
    addAnimal: (req, res, next) => {
        const db = req.app.get('db')
        db.add_animal([req.body.name, req.body.img])
            .then(data => {
                res.status(200).send(data)
            }).catch(() => res.status(500).send('Something went wrong adding the animal'))
    },
    getAnimal: (req, res, next) => {
        const db = req.app.get('db')
        db.get_animal([req.params.id])
            .then(data => {
                res.status(200).send(data)
            }).catch(() => res.status(500).send('Something went wrong retreiving the animal'))
    },
    editAnimal: (req, res, next) => {
        const db = req.app.get('db')
        db.edit_animal([req.body.id, req.body.name, req.body.img])
            .then(data => {
                res.status(200).send(data)
            }).catch(() => res.status(500).send('Something went wrong retreiving the animal'))
    },
    deleteAnimal: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_animal([req.params.id])
            .then(data => {
                res.status(200).send(data)
            }).catch(() => res.status(500).send('Something went wrong retreiving the animal'))
    },
    
}