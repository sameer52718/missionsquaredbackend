import mongoose from "mongoose";

const archetypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    svgIconFile: {
      type: String,
    },
    pngIconFile: {
      type: String,
    },
    hexColor: {
      type: String,
    },
    description: {
      type: String,
    },
    thinkingStyle: {
      type: String,
    },
    leadershipStyle: {
      type: String,
    },
    competitiveStyle: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export const Archetype = mongoose.model("Archetype",archetypeSchema)