import { ChemicalServer } from "chemicaljs";
import express from "express";


const chemical = new ChemicalServer({
    default: "rammerhead",
    uv: true,
    scramjet: false,
    rammerhead: false,
});


const port = process.env.PORT || 8080;

chemical.listen(port, () => {
    console.log(`Running on port ${port}`);
});

chemical.use(express.static("static"));
chemical.use(express.static("img"));