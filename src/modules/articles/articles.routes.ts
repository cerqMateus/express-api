import { Router } from "express";
import { getArticlesHandler, createArticleHandler, getArticleByIdHandler, deleteArticleHandler, updateArticleHandler, } from "./articles.controller.js";
import { authenticate } from "../../middleware/authenticate.js";

const articlesRouter = Router();

articlesRouter.get("/", getArticlesHandler);
articlesRouter.get("/:id", getArticleByIdHandler);
articlesRouter.post("/", authenticate, createArticleHandler);
articlesRouter.put("/:id", authenticate, updateArticleHandler);
articlesRouter.delete("/:id", authenticate, deleteArticleHandler);

export default articlesRouter;