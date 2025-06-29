// import { PROPERTYLISTINGSAMPLE } from "@/constants";
// import { PropertyProps } from "@/interfaces";
// import Pill from "@/components/common/Pill";
// import Image from "next/image";

// const filters = ["Top Villa", "Pool", "Self Checkin", "Free Parking", "Pet Friendly"];

// const HomePage = () => {
//   return (
//     <div className="flex flex-col gap-12">
//       {/* Hero Section */}
//       <section
//         className="h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//         style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury,villa')" }}
//       >
//         <div className="text-center bg-black bg-opacity-40 p-6 rounded-lg">
//           <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
//           <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="px-6">
//         <h2 className="text-xl font-semibold mb-4">Filter by category</h2>
//         <div className="flex flex-wrap gap-3">
//           {filters.map((filter, index) => (
//             <Pill key={index} label={filter} />
//           ))}
//         </div>
//       </section>

//       {/* Listing Section */}
//       <section className="px-6">
//         <h2 className="text-2xl font-bold mb-6">Explore Luxury Properties</h2>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative h-52 w-full">
//                 <Image
//                   src={property.image}
//                   alt={property.name}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="rounded-t-lg"
//                 />
//               </div>
//               <div className="p-4 flex flex-col gap-2">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-semibold">{property.name}</h3>
//                   <span className="text-yellow-500 font-medium">★ {property.rating}</span>
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   {property.address.city}, {property.address.country}
//                 </p>
//                 <p className="text-base font-bold text-indigo-600">${property.price}/night</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
import Image from "next/image";
import { myImages, IMAGE_PATHS } from "@/constants/images";
import PropertyListing from "@/components/common/PropertyListing";
import FilterSection from "@/components/layout/Filter";

const Home = () => {
  return (
    <main>
      <section className="w-full min-h-screen">
        <div className="hero-section p-[3em] md:py-[8em] lg:py-[14em] mx-4 md:mx-8 rounded-2xl">
          <div className="text-center text-white max-w-[100%]">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">
              Find your favorite place here!
            </h1>
            <p className="text-xs md:text-lg lg:text-2xl">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
        <FilterSection />
        <PropertyListing />
      </section>
    </main>
  );
};

export default Home;
