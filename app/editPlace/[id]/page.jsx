import EditPlaceForm from "@/components/EditPlaceForm";

const getPlaceById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/places/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch place");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export default async function EditPlace({ params }) {
  const { id } = params;
  const { place } = await getPlaceById(id);
  const { name, description, type, address, city, zipCode, country } = place;

  return <EditPlaceForm id={id} name={name} description={description} type={type} address={address} city={city} zipCode={zipCode} country={country} />;
}
