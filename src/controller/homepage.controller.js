const express = require("express");
const router = express.Router();
const hmp = require("../model/homepage.model");

router.get("", async(req,res)=>{
    try {
        const v2 = await hmp.find().lean().exec();
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.post("", async(req,res)=>{
    try {
        const v2 = await hmp.create(req.body);
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const v2 = await hmp.findById(req.params.id).lean().exec();
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});


router.patch("/:id",async(req,res)=>{
    try {
        const v2 = await hmp.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(200).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const v2 = await hmp.findByIdAndDelete(req.params.id, req.body);
        return res.status(201).send(v2);
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

module.exports = router;