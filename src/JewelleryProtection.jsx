import React from 'react'
import { FiCheck } from 'react-icons/fi';
const JewelleryProtection = () => {

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white productsection">
            <div class="container px-5 py-26 mx-auto mt-5">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 " src="./jewellery.png" />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest"><b><strong>Jewellery Protection System</strong></b></h2>
                        <p className='leading-relaxed'>
                            Our professional equipment stands out with the following distinctive features:
                            <ul>
                                <li>
                                    <span className="icon"><FiCheck /></span> Fastest and densest fog emission, unmatched by any other manufacturer.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Patented nozzle with tamper and orientable design.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Very low and consistently stable power consumption (from 37W).
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Diverse product range for various space volumes and customer needs.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Holds all necessary European and international certificates.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Most price-competitive in the market, with affordable equipment and maintenance-free tanks.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Manual activation via wristwatch, panic button, mobile, or remote control for enhanced security.
                                </li>
                                <li>
                                    <span className="icon"><FiCheck /></span> Seamless integration with existing alarm systems, CCTV, panic buttons, bracelets, sensors, and more.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JewelleryProtection