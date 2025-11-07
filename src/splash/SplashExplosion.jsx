// // SplashExplosion.jsx
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "motion/react"
// import { useEffect, useState } from "react";

// export default function SplashExplosion({ onFinish }) {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(false);
//       if (onFinish) onFinish();
//     }, 2600);
//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   const colors = ["#ff0000", "#ff4d4d", "#ffffff", "#ff8080", "#ffcccc"];
//   const clouds = Array.from({ length: 15 });

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 2.6, ease: "easeOut" }}
//           className="fixed inset-0 bg-black z-50 overflow-hidden"
//         >
//           {clouds.map((_, i) => {
//             const color = colors[Math.floor(Math.random() * colors.length)];
//             const x = Math.random() * 800 - 400;
//             const y = Math.random() * 600 - 300;
//             const delay = Math.random() * 0.3;

//             return (
//               <motion.div
//                 key={i}
//                 initial={{
//                   x: 0,
//                   y: 0,
//                   scale: 0,
//                   opacity: 1,
//                 }}
//                 animate={{
//                   x,
//                   y,
//                   scale: [0, 1.8, 2.5],
//                   opacity: [1, 0.9, 0],
//                   borderRadius: ["60%", "40%", "70%", "50%"],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   ease: "easeOut",
//                   delay,
//                 }}
//                 className="absolute blur-3xl"
//                 style={{
//                   width: `${200 + Math.random() * 200}px`,
//                   height: `${200 + Math.random() * 200}px`,
//                   backgroundColor: color,
//                   left: "50%",
//                   top: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               />
//             );
//           })}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }