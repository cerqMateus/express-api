import { Router } from "express";
import { getArticlesHandler, createArticleHandler, getArticleByIdHandler, deleteArticleHandler, updateArticleHandler, } from "./articles.controller.js";
const router = Router();

router.get("/", getArticlesHandler);
router.post("/", createArticleHandler);
router.get("/:id", getArticleByIdHandler);
router.put("/:id", updateArticleHandler);
router.delete("/:id", deleteArticleHandler);

export default router;