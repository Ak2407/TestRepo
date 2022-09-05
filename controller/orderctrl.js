const repo = require('../DB/repository/orderrepo');

module.exports = {
    addOrder(req, res) {
        const obj = req.body;
        repo.addOrder(obj)
            .then((data) => {
                res.status(200).send({
                    message: "Order Placed Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(400).send({
                    message: "Error placing order",
                    error,
                });
            })
    },
    async fetchOrders(req, res) {
        const obj = req.body;
        const result = await repo.fetchOrders(obj);
        if (result) {
            res.status(200).send({
                message: "Orders Fetched Successfully",
                result,
            });
        }
        else {
            res.status(400).send({
                message: "No Orders Found",
            });
        }
    }
}