module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db');
       
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => console.log('Error with getAllProducts',err))
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;

        db.create_product([name, price, img]).then(products => {
            res.status(200).send(products)
        }).catch(err => console.log('Error with createProduct', err))
    },
}