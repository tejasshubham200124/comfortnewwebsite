
import React, { useEffect , useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="col-lg-4 col-md-6 text-center mb-3"
      ref={ref}
      animate={controls}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* <div className="service-wrap"
      > */}
      <div
        className="service-wrap"
        style={{
          position: 'relative',
          transition: 'all 0.5s',
          backgroundImage: isHovered ? "url('./bgimagetwo.jpg')" : 'none',
          backgroundSize: isHovered ? 'cover' : 'auto',
          backgroundPosition: isHovered ? 'center center' : 'auto',
          backgroundAttachment: isHovered ? 'local' : 'scroll',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">Read More</a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="service-grid pb-5 pt-5">
      <span className="absolute right-10 top-10 z-[-1]">
        <svg
          width={75}
          height={75}
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
            fill="url(#paint0_linear_1179_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_4"
              x1="-1.63917e-06"
              y1="37.5"
              x2={75}
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6288" stopOpacity="0.31" />
              <stop offset={1} stopColor="#6288" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center mb-2">
            <h6
              className="text-4xl font-bold leading-tight text-center sm:text-5xl mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#333',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                letterSpacing: '2px',
                lineHeight: '1.2',
              }}
            >
              ~ Our Services ~
            </h6>
          </div>
        </div>
        <div className="row">
          <ServiceCard
            icon="fas fa-layer-group"
            title="E Survellience"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
          <ServiceCard
            icon="far fa-chart-bar"
            title="Alarm Monitoring System"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
          <ServiceCard
            icon="fas fa-database"
            title="Energy Management"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
          <ServiceCard
            icon="fas fa-cogs"
            title="IT Consultancy"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
          <ServiceCard
            icon="fas fa-chart-pie"
            title="Digital Marketing"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
          <ServiceCard
            icon="fas fa-thumbs-up"
            title="Hosting Solutions"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry..."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
