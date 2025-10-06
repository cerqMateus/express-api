import express from "express";
import articlesRouter from "./modules/articles/articles.routes.js";
import authenticationRouter from "./modules/authentication/authentication.routes.js";



const app = express();

app.use(express.json());

// Healthcheck route
app.get("/healthcheck", (_req, res) => {
    res.send("API is up and running!");
});

app.use("/articles", articlesRouter);
app.use('/authentication', authenticationRouter);

app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on http://localhost:3000");
});