const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middlewares/client/auth.middleware");
const controller = require("../../controllers/client/user.controller");

router.post("/register", controller.register);

router.post("/login", controller.login);

router.post("/password/forgot", controller.forgotPassword);

router.post("/password/otp", controller.otpPassword);

router.patch("/password/reset", controller.resetPassword);

router.get("/profile", authMiddleware.requireAuth,controller.profile);

module.exports = router;