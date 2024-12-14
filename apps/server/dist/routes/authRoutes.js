"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Route to register a new user
router.post("/register", authController_1.register);
// Route to log in an existing user
router.post("/login", authController_1.login);
exports.default = router;
