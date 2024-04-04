import "../services/services.css"
import React from "react";
import Service from "../components/service/service";

const Services = () => {

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore.`;

    const descriptionText = 'Learn More'

    const servicesData = [
        { title: 'Servicio 1', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
        { title: 'Servicio 2', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
        { title: 'Servicio 3', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
        { title: 'Servicio 4', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
        { title: 'Servicio 5', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' },
        { title: 'Servicio 6', imageSrc: '/images/service.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.' }
    ];

    return (
        <div className="container-services">
            <div>
                <h3>Our Services</h3>

                <h1>Find Out What We Provide</h1>
                <p className="text-services-description">{descriptionText}</p>

            </div>

            <div className="container-services-description">

                {servicesData.map((service, index) => (
                    <Service key={index} title={service.title} imageSrc={service.imageSrc} description={service.description} />
                ))}

            </div>




        </div>
    )
}

export default Services;