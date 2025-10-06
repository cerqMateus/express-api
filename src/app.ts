import express from "express";
import passport from "passport";

import articlesRouter from "./modules/articles/articles.routes.js";
import authenticationRouter from "./modules/authentication/authentication.routes.js";
import googleAuthRouter from "./modules/authentication/googleAuth.routes.js";
import authorizationRouter from "./modules/authorization/authorization.route.js";
import './modules/authentication/passport.js'


const app = express();

app.use(express.json());
app.use(passport.initialize())

// Healthcheck route
app.get("/healthcheck", (_req, res) => {
    res.send("API is up and running!");
});

app.use("/authentication", authenticationRouter);
app.use('/authentication', googleAuthRouter);
app.use("/authorization", authorizationRouter);
app.use("/articles", articlesRouter);

app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on http://localhost:3000");
});