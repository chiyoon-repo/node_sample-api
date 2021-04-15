const app = require("./api/router");

const service_port = 3000;
app.listen(service_port, () => {
    console.log(`Server is running on ${service_port}`);
});