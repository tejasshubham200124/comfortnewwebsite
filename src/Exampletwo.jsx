// import React, { useEffect, useState } from 'react';
// import Globe from 'globe.gl';

// const Exampletwo = () => {
//   const [globeRef, setGlobeRef] = useState(null);
//   const [hoveredCountry, setHoveredCountry] = useState(null);

//   useEffect(() => {
//     if (!globeRef) {
//       const globeElement = document.createElement('div');
//       globeElement.id = 'globe';
//       document.body.appendChild(globeElement);
//       setGlobeRef(globeElement);

//       const instance = Globe()
//         .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
//         .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
//         .labelLat((d) => d.coordinates[0])
//         .labelLng((d) => d.coordinates[1])
//         .labelText((d) => d.city)
//         .labelsData([{ id: 'label1', city: 'New York', coordinates: [40.7128, -74.0060] }])
//         .backgroundColor('#1a1a1a')
//         .showGraticules(true);

//       instance(globeElement);

//       globeElement.addEventListener('mouseover', (event) => {
//         const country = instance.getCountryAtMouse(event);
//         setHoveredCountry(country);
//       });

//       globeElement.addEventListener('click', (event) => {
//         const country = instance.getCountryAtMouse(event);
//         console.log('Clicked on', country);
//       });

//       // Manual cleanup
//       return () => {
//         if (instance && globeElement) {
//           // Manually remove labels
//           instance.removeLabel('label1');

//           // Check if instance has a scene property
//           if (instance.renderer && instance.renderer.scene) {
//             // Access the scene property from the renderer and traverse
//             instance.renderer.scene.traverse((object) => {
//               if (object instanceof THREE.Mesh) {
//                 object.geometry.dispose();
//                 object.material.dispose();
//               }
//             });
//           }

//           const { renderer } = instance;
//           if (renderer) {
//             renderer.dispose();
//           }

//           document.body.removeChild(globeElement);
//         }
//       };
//     }
//   }, []);

//   return (
//     <div>
//       {hoveredCountry && (
//         <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
//           Hovered: {hoveredCountry.city}
//         </div>
//       )}
//       <div id="globe" />
//     </div>
//   );
// };

// export default Exampletwo;


