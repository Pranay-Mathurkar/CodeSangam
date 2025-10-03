




import Header from "../pages/header";
import Hero from "../pages/hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  }, [])

  return (
    <main className="relative">
      {/* Gradient Overlay */}
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient background" />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />
    </main>
  )
}






// import Header from "../pages/header";
// import Hero from "../pages/hero";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       once: true, // Animate only once per scroll
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <main className="relative overflow-hidden bg-black text-white min-h-screen">
//       {/* 🔶 Gradient Overlay */}
//       <img
//         className="absolute top-0 right-0 opacity-60 -z-10 select-none pointer-events-none"
//         src="/gradient.png"
//         alt="Gradient background"
//       />

//       {/* 🔶 Orange Glow Light Effect */}
//       <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_120px_#e99b63] -rotate-[30deg] -z-10"></div>

//       {/* 🔹 Header Section */}
//       <Header />

//       {/* 🔹 Hero Section */}
//       <Hero />
//     </main>
//   );
// }
























































































