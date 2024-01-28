import mongoose from "mongoose";


const attributeSchema = new mongoose.Schema({
    name: {type:String,},
    category: {type:String,},
    shortDescription: {type:String,},
    longDescription: {type:String,},
    lowScoreSuperpower: {type:String,},
    lowScoreChallenge: {type:String,},
    highScoreSuperpower: {type:String,},
    highScoreChallenge: {type:String,}
},{
    timestamps:true
})

export const Attribute = mongoose.model("Attribute",attributeSchema)