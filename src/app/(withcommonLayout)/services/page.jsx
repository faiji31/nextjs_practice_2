import React from "react";
import ServiceCard from "../../../components/ServiceCard";

const getAllServices = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ferdouszihad/Hero-Kidz-assets/refs/heads/main/toys.json",
    {
      // Optional: cache data in Next.js
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  return data;
};

const SevicePage = async () => {
  const services = await getAllServices();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Service Page</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={service.title}>
            {/* Pass both service and index */}
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevicePage;