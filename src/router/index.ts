import express from "express";
const router = express.Router();
import buku from "./buku";

router.use("/buku", buku);

export default router;
