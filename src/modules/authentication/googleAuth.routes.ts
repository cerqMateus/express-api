import { Router } from "express";
import passport from "passport";

const googleAuthRouter = Router();

googleAuthRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

googleAuthRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/auth/failure",
    }),
    (req, res) => {
        const { token } = req.user as any;
        res.json({ token });
    }
);

googleAuthRouter.get("/failure", (req, res) => {
    res.status(401).json({ message: "Google Authentication Failed" });
});

export default googleAuthRouter;