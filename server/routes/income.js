import express from "express";
import db from "../db/connection.js";
// This helps convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

const router = express.Router();

// All 
router.get("/", async (req, res) => {
    let collection = await db.collection("incomes");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// By id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("incomes");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Create new income
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            amount: req.body.amount,
        };
        let collection = await db.collection("incomes");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding income");
    }
});

// Update income by id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name,
                amount: req.body.amount,
            },
        };

        let collection = await db.collection("incomes");
        let result = await collection.updateOne(query, updates);
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating income");
    }
});

router.delete(":/id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("incomes");
        let result = await collection.deleteOne(query);

        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting income");
    }
});

export default router;