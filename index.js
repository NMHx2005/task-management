const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//  Import module cấu hình cơ sở dữ liệu từ file database.js trong thư mục config.
const database = require("./config/database");

const routesApi = require("./routes/client/index.route");

// Gọi phương thức connect() từ module cơ sở dữ liệu đã import để kết nối với cơ sở dữ liệu.
database.connect();

const app = express();
const port = process.env.PORT;

// parse application/json
app.use(bodyParser.json());

routesApi(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});