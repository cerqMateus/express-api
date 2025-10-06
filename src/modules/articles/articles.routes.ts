import { Router } from "express";
import { getArticlesHandler, createArticleHandler, getArticleByIdHandler, deleteArticleHandler, updateArticleHandler, } from "./articles.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { authorize } from "../../middleware/authorize.js";

const articlesRouter = Router();

articlesRouter.get("/", getArticlesHandler);
articlesRouter.get("/:id", getArticleByIdHandler);
articlesRouter.post("/", [authenticate, authorize(["WRITER"])], createArticleHandler);
articlesRouter.put("/:id", [authenticate, authorize(["WRITER"])], updateArticleHandler);
articlesRouter.delete("/:id", [authenticate, authorize(["WRITER"])], deleteArticleHandler);

export default articlesRouter;