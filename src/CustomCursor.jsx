// // CustomCursor.js
// import React, { useState, useEffect } from 'react';


// const CustomCursor = () => {
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setPosition({ top: e.pageY - 10, left: e.pageX - 10 });
//     };

//     const handleMouseClick = () => {
//       setIsClicked(true);
//       setTimeout(() => {
//         setIsClicked(false);
//       }, 500);
//     };

//     document.addEventListener('mousemove', updateCursorPosition);
//     document.addEventListener('click', handleMouseClick);

//     return () => {
//       document.removeEventListener('mousemove', updateCursorPosition);
//       document.removeEventListener('click', handleMouseClick);
//     };
//   }, []);

//   return (
//     <div
//       className={`cursor ${isClicked ? 'expand' : ''}`}
//       style={{ top: `${position.top}px`, left: `${position.left}px` }}
//     >
//       <div className="cursor-after"></div>
//     </div>
//   );
// };

// export default CustomCursor;


// CursorComponent.jsx
import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });

    // Move the cursor
    function onMouseMove(e) {
      bigBall.style.transform = `translate3d(${e.pageX - 15}px, ${e.pageY - 15}px, 0)`;
      smallBall.style.transform = `translate3d(${e.pageX - 5}px, ${e.pageY - 7}px, 0)`;
    }

    // Hover an element
    function onMouseHover() {
      bigBall.style.transform = 'scale(4)';
    }

    function onMouseHoverOut() {
      bigBall.style.transform = 'scale(1)';
    }

    // Remove event listeners on component unmount
    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', onMouseHover);
        hoverable.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

