// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
// import { useState } from "react";
// import SplashExplosion from "../splash/SplashExplosion";

// import { h1 } from "motion/react-client";

export default function Home() {
  // const [loaded, setLoaded] = useState(false);
  return (
    <>
      {/* <div className="w-full h-screen bg-neutral-900 text-white overflow-hidden">
        {!loaded && <SplashExplosion onFinish={() => setLoaded(true)} />}

        {loaded && (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">💥 Welcome!</h1>
            <p className="text-lg text-gray-300">
              Ini konten utama setelah efek ledakan selesai.
            </p>
          </div>
        )}
      </div> */}
      <div className="text-7xl text-center mt-24 bg-amber-800">
        <h1>Let Me Introduce</h1>
        <h1>My self</h1>
        <h1>As Developer.</h1>
      </div>
    </>
  );
}
