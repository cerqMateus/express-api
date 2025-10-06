import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient()

export async function getArticles() {
    return prisma.article.findMany()
}

export async function createArticle(data: { title: string; content: string }) {
    return prisma.article.create({
        data
    });
}

export async function getArticleById(articleId: number) {
    return prisma.article.findUnique({
        where: {
            id: articleId,
        },
    });
}

export async function updateArticle(articleId: number, data: { title: string; content: string }) {
    return prisma.article.update({
        where: {
            id: articleId,
        },
        data,
    });
}

export async function deleteArticle(articleId: number) {
    return prisma.article.delete({
        where: {
            id: articleId,
        },
    });
}