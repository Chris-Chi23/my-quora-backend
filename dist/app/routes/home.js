"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
const { index, upload } = require('../controllers/home');
router.get('/', index);
router.post('/upload', upload);
module.exports = router;
//# sourceMappingURL=home.js.map