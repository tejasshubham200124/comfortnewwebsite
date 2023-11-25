// OurVision.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurMission = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    
    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const [refText, inViewText] = useInView({
        triggerOnce: true,
    });
    const [refImage, inViewImage] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inViewText) {
            controlsText.start({ opacity: 1, x: 0 });
        }
        if (inViewImage) {
            controlsImage.start({ opacity: 1, x: 0 });
        }
    }, [controlsText, controlsImage, inViewText, inViewImage]);


    const controlsTextMission = useAnimation();
    const controlsImageMission = useAnimation();
    const [refTextMission, inViewTextMission] = useInView({
        triggerOnce: true,
    });
    const [refImageMission, inViewImageMission] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inViewTextMission) {
            controlsTextMission.start({ opacity: 1, x: 0 });
        }
        if (inViewImageMission) {
            controlsImageMission.start({ opacity: 1, x: 0 });
        }
    }, [controlsTextMission, controlsImageMission, inViewTextMission, inViewImageMission]);




    return (
        <div className="bg-gray-100 mt-3">
            <motion.div
                className="h-64 bg-cover bg-center flex items-center justify-center relative overflow-hidden vision"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="./vision.jpg"
                    alt="Our Vision Banner"
                    className="w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-20"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                </motion.div>
            </motion.div>

            {/* Our Vision Section */}

            <div className="container mx-auto mt-8 p-8  flex flex-col md:flex-row">
                <motion.div
                    className="md:w-1/2"
                    ref={refText}
                    animate={controlsText}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Do</h2>
                    <p className="text-gray-700 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex items-center justify-center"
                    ref={refImage}
                    animate={controlsImage}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    <div className="w-full h-full md:w-100 md:h-80 rounded-full overflow-hidden">
                        <img src="./whatwedo.jpg" alt="What We Do" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>

            {/* Second Section */}
            
            <div className="container mx-auto mt-8 p-8  flex flex-col md:flex-row-reverse">
                <motion.div
                    className="md:w-1/2"
                    ref={refTextMission}
                    animate={controlsTextMission}
                    initial={{ opacity: 0, x: '100' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
                    <p className="text-gray-700 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex items-center justify-center"
                    ref={refImageMission}
                    animate={controlsImageMission}
                    initial={{ opacity: 0, x: '-100' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    {/* Circular Image */}
                    <div className="w-full h-full md:w-100 md:h-80 rounded-full overflow-hidden">
                        <img src="./ourvision.jpg" alt="Mission" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>

            {/* third section  */}

            <motion.div
                className="container mx-auto mt-8 p-8  flex flex-col md:flex-row"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Value</h2>
                    <p className="text-gray-700 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    {/* Circular Image */}
                    <div className="w-full h-full md:w-100 md:h- 80  rounded-full overflow-hidden">
                        <img src="./ourvalues.jpg" alt="What We Do" className="w-full h-full object-cover" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OurMission;
