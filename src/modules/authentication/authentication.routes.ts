import { Router } from "express";

import { register, login } from "./authentication.controller.js";

const authenticationRouter = Router();

authenticationRouter.post('/register', register)
authenticationRouter.post('/login', login)

export default authenticationRouter