import React from "react";
import Service from "../components/service/service";

const Services = () => {

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore.`;

    const descriptionText = 'Learn More'

    const servicesData = [
        { title: 'Servicio 1', imageSrc: 'ruta/de/imagen1.jpg', description: 'Descripción del servicio 1.' },
        { title: 'Servicio 2', imageSrc: 'ruta/de/imagen2.jpg', description: 'Descripción del servicio 2.' },
        { title: 'Servicio 3', imageSrc: 'ruta/de/imagen3.jpg', description: 'Descripción del servicio 3.' },
    ];



    return (
        <div>
            <div>
                <h3>Our Services</h3>

                <h1>Find Out What We Provide</h1>
                <p>{descriptionText}</p>

            </div>

            <div>

                {servicesData.map((service, index) => (
                    <Service key={index} title={service.title} imageSrc={service.imageSrc} description={service.description} />
                ))}

            </div>




        </div>
    )
}

export default Services;