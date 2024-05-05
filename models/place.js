import mongoose, { Schema } from "mongoose";

const placeSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.models.Placec || mongoose.model("Place", placeSchema);

export default Place;
