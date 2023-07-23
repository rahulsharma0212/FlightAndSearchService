const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const setupAndStartServer = () => {
    //create the express instance
    const app = express();
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", apiRoutes);
    app.listen(PORT, async () => {
        console.log(`Flight and search service is running on ${PORT}`);
        /* City.create({
            name: "new delhi",
        }); */
    });
};

setupAndStartServer();
