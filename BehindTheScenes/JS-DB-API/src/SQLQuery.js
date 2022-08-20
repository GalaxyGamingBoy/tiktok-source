module.exports.SQLQueries = (queryType, args = []) => {
    switch (queryType) {
        case "getProducts":
            return `SELECT * FROM products`;
        case "seedProduct":
            return `INSERT INTO products (name, price) VALUES ('${args[0]}', '${args[1]}') ON CONFLICT DO NOTHING`;
        case "deleteAllProducts":
            return `DELETE FROM products`;
        case "resetPK":
            return `ALTER SEQUENCE products_id_seq RESTART WITH 1`;
        default:
            return `SELECT * FROM products`;
    }
};
