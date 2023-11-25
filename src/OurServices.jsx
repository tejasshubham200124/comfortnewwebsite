
import React from 'react';
import './index.css';
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon, FaStar as StarIcon } from 'react-icons/fa';

function OurServices() {
  return (

    <div>
      <motion.div
        className="h-50 flex items-center justify-center bg-cover bg-no-repeat relative banner mt-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <img src='./servicesweoffer.jpg' alt="Company" className="w-full h-full object-cover opacity-50" />
      </motion.div>
      <div className='mt-4'>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Esurveillance"
            dateClassName="custom-date-class"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <p> At <b><strong>Comfort</strong></b>, we take pride in elevating security solutions to new heights with our cutting-edge eSurveillance Security service. As a leading provider in the industry, we understand that safeguarding your assets is paramount, and our comprehensive eSurveillance Security is designed to meet and exceed your expectations.
              Our state-of-the-art technology seamlessly integrates advanced surveillance systems with intelligent analytics, offering you unparalleled protection and peace of mind. With a focus on proactive threat detection and rapid response, we go beyond traditional security measures to create a robust shield around your premises.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Alarm Monitoring Services"
            dateClassName="custom-date-class"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <p >
              "In recognizing the escalating costs associated with traditional security personnel and the inherent limitations in their effectiveness, we present a strategic solution: Centralized Intrusion Alarm Monitoring Services (CAMS). CAMS not only presents a highly effective security optimization but also serves as a cost-efficient alternative to conventional guard deployment. Furthermore, our CAMS seamlessly integrates with existing Fire Alarm Systems or can establish a dedicated fire detection system if deemed necessary.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="custom-date-class"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Energy Management"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <p >
              We ensure effective energy monitoring, allowing CMS to remotely switch ON and OFF lights, air-conditioning and diesel generators. UPS and EB voltage and power failures are intimated to the CMS. The CMS also records diesel low and high level alerts.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            dateClassName="custom-date-class"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="IT Consultant"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <p >
              At a point of time in growth of Business, specialized consultancy becomes indispensable. We provide solutions for all your problems easily with our expertise and innovative ideas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Digital Marketing"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            dateClassName="custom-date-class"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <p >
              Make your way to the top, enjoy high traffic & generate more conversions! Our SEO Experts will make it possible for you to get listed on the first page of top search engines.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Hosting Solutions"
            dateClassName="custom-date-class"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
          >

            <p >
              We Offer a fully automated hosting business Platform monitored via APIs which provides optimum transparency and Control. Being backed up by a team of Expert Engineers and professionals, with tranquility.
            </p>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>

  );
}

export default OurServices;
