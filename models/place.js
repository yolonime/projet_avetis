import mongoose, { Schema } from "mongoose";


  const placeSchema = new Schema(
    {
      name: String,
      description: String,
      type: String,
      address: String,
      city: String,
      zipCode: String,
      country: String,
      stars: String,
      price: String,
      cuisine: String,
      artisticCurrent: String,
      artType: String,
      freeOrPaid: String,
      priceMuseum: String,
      typeBar: String,
      priceBar: String,
      typePark: String,
      publicOrPrivate: String,
      freeOrPaidPark: String,
      pricePark: String,
    },
    {
      timestamps: true,
    }
  );

  const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

  export default Place;