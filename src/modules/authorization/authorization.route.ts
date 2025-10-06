import { Router } from "express";

import { requestWriterRole, viewRoleRequests, updateRoleRequest } from "./authorization.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { authorize } from "../../middleware/authorize.js";

const authorizationRouter = Router();

authorizationRouter.post("/request-writer", [authenticate], requestWriterRole);
authorizationRouter.get(
    "/role-requests",
    [authenticate, authorize(["ADMIN"])],
    viewRoleRequests
);
authorizationRouter.post(
    "/role-requests/:id",
    [authenticate, authorize(["ADMIN"])],
    updateRoleRequest
);

export default authorizationRouter;