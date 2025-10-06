import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { PrismaClient } from '../../generated/prisma/index.js'

const prisma = new PrismaClient();

function generateToken(userId: number) {
    return jwt.sign({ id: userId }, 'your-secret-key', { expiresIn: '24h' })
}

export async function registerUser(email: string, username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            email,
            username,
            password: hashedPassword
        },
    })
    return generateToken(user.id)
};

export async function loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password')
    }
    return generateToken(user.id)
}
