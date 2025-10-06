import { Router } from "express";

import { requestWriterRole, viewRoleRequests, updateRoleRequest } from "./authorization.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { authorize } from "../../middleware/authorize.js";

const router = Router();

router.post("/request-writer", [authenticate], requestWriterRole);
router.get(
    "/role-requests",
    [authenticate, authorize(["ADMIN"])],
    viewRoleRequests
);
router.post(
    "/role-requests/:id",
    [authenticate, authorize(["ADMIN"])],
    updateRoleRequest
);

export default router;