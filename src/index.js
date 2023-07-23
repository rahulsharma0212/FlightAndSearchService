const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = () => {
    //create the express instance
    const app = express();
    app.listen(PORT, async () => {
        console.log(`Flight and search service is running on ${PORT}`);
        /* City.create({
            name: "new delhi",
        }); */
    });
};

setupAndStartServer();
