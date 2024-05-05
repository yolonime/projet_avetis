"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AddPlace() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [stars, setStars] = useState("");
  const [price, setPrice] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [artisticCurrent, setArtisticCurrent] = useState("");
  const [artType, setArtType] = useState("");
  const [freeOrPaid, setFreeOrPaid] = useState("");
  const [priceMuseum, setPriceMuseum] = useState("");
  const [typeBar, setTypeBar] = useState("");
  const [priceBar, setPriceBar] = useState("");
  const [typePark, setTypePark] = useState("");
  const [publicOrPrivate, setPublicOrPrivate] = useState("");
  const [freeOrPaidPark, setFreeOrPaidPark] = useState("");
  const [pricePark, setPricePark] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !type || !address || !city || !zipCode || !country ) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/places", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, description, type, address, city, zipCode, country, stars, price, cuisine, artisticCurrent, artType, freeOrPaid, priceMuseum, typeBar, priceBar, typePark, publicOrPrivate, freeOrPaidPark, pricePark }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a place");
      }
    }

    catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Place Name"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Place Description"
      />

      <input
        onChange={(e) => setType(e.target.value)}
        value={type}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Place Type"
      />

      <input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Place Address"
      />

      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="City"
      />

      <input
        onChange={(e) => setZipCode(e.target.value)}
        value={zipCode}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Zip Code"
      />

      <input
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Country"
      />

      {type === "Restaurant" && (
        <>
          <input
            onChange={(e) => setCuisine(e.target.value)}
            value={cuisine}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Cuisine Type"
          />
          <input
            onChange={(e) => setStars(e.target.value)}
            value={stars}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Number of Stars"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Average Price"
          />
        </>
      )}

      {type === "Museum" && (
        <>
          <input
            onChange={(e) => setArtisticCurrent(e.target.value)}
            value={artisticCurrent}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Artistic Current"
          />
          <input
            onChange={(e) => setArtType(e.target.value)}
            value={artType}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Art Type"
          />
          <input
            onChange={(e) => setFreeOrPaid(e.target.value)}
            value={freeOrPaid}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Free or Paid"
          />
          <input
            onChange={(e) => setPriceMuseum(e.target.value)}
            value={priceMuseum}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Price"
          />
        </>
      )}

      {type === "Bar" && (
        <>
          <input
            onChange={(e) => setTypeBar(e.target.value)}
            value={typeBar}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Bar Type"
          />
          <input
            onChange={(e) => setPriceBar(e.target.value)}
            value={priceBar}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Average Price"
          />
        </>
      )}

      {type === "Park" && (
        <>
          <input
            onChange={(e) => setTypePark(e.target.value)}
            value={typePark}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Park Type"
          />
          <input
            onChange={(e) => setPublicOrPrivate(e.target.value)}
            value={publicOrPrivate}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Public or Private"
          />
          <input
            onChange={(e) => setFreeOrPaidPark(e.target.value)}
            value={freeOrPaidPark}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Free or Paid"
          />
          <input
            onChange={(e) => setPricePark(e.target.value)}
            value={pricePark}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Price"
          />
        </>
      )}

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Place
      </button>
    </form>
  );
}