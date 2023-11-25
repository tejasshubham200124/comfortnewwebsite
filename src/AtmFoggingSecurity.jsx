import React from 'react'
import { FiCheck } from 'react-icons/fi';

const AtmFoggingSecurity = () => {
    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white productsection">
            <div class="container px-5 py-26 mx-auto mt-5">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 " src="./jewellery.png" />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest"><b><strong>ATM Fogging Security System</strong></b></h2>
                        <p className='leading-relaxed'>
                            <strong>Features of UR Fog™ ATM Security:</strong>
                            <ul>
                                <li>
                                    <span class="icon"><FiCheck /></span> Real-time notification of an attack via SMS, Email, and Voice Call.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> No additional network/power supply required, rides on existing infrastructure.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Economic power consumption, adding little load on inverters.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Remotely manage and configure security system using web-based UR Fog RMS.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Discrete installation.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Protects ATM in remote sites and requires no maintenance after each activation.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Remote system configuration and diagnosis.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Tamper-proof and standby battery life.
                                </li>
                                <li>
                                    <span class="icon"><FiCheck /></span> Option to mix the fog with tear/pepper gas.
                                </li>
                            </ul>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AtmFoggingSecurity