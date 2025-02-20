const express = require("express");
const router = express.Router();
const { getJobs } = require("../controllers/jobs.controller");


router.get("/posts",getJobs)