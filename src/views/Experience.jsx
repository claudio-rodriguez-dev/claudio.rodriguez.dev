import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import zener from "../img/zener_logo.jpeg"
import baobab from "../img/baobab_logo.jpeg"
import inforyde from "../img/inforyde_logo.jpeg"



const Experience = () => {

    const experiences = [
        {
            title: "Python / Android Developer",
            company: "Zener",
            description: "I developed a native Android application in Java from scratch along with a colleague for the company's internal use.",
            description_2: "The purpose of the application was to digitize multiple processes that technicians previously carried out on paper, optimizing workflow and improving operational efficiency.",
            description_3: "Additionally, I was involved in the development of the backend in Python, which the application used to communicate, manage, and store information centrally.",
            logo: zener,
            fallback: "ZN"
        },
        {
            title: "Python Developer",
            company: "Inforyde",
            description: "I participated in the backend development of various projects related to the electricity market.",
            description_2: "My main task was to automate the process of extracting, transforming, and storing electricity market data in databases, ensuring data accuracy and efficiency.",
            description_3: "Additionally, I developed and maintained APIs to serve this data to other systems, improving accessibility and real-time analysis capabilities for the business.",
            logo: inforyde,
            fallback: "IF"
        },
        {
            title: "Python Developer",
            company: "Baobab Soluciones",
            description: "I worked closely with the frontend team, as well as mathematicians and data scientists, to develop optimization and predictive tools based on artificial intelligence and advanced analytics.",
            description_2: "My role as a backend developer involved developing the APIs used by the frontend and managing the data for later consumption by the data scientists.",
            description_3: "Collaborating across different areas allowed us to create efficient and effective solutions tailored to the specific needs of our clients.",
            logo: baobab,
            fallback: "BS"
        }
    ]

    return (
        <div id='experience' className='h-full xl:h-screen'>
            <div className='flex flex-col items-center h-full justify-center xl:h-screen'>
                <h2 className='text-center text-2xl m-10 xl:text-3xl 2xl:text-5xl 2xl:mb-20'>Experience:</h2>
                <Carousel opts={{ align: "center", loop: true }} className="w-full h-min max-w-3xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-7xl">
                    <CarouselContent>
                        {experiences.map((experience, index) => (
                            <CarouselItem key={index} className=" 2xl:basis-1/2">
                                <div className="p-1">
                                    <Card className='rounded-[7px] bg-card/50'>
                                        <CardHeader>
                                            <div className='flex justify-between items-center'>
                                                <CardTitle className='sm:text-2xl 2xl:text-3xl'>{experience.company}</CardTitle>
                                                <Avatar className='2xl:w-10 2xl:h-10'>
                                                    <AvatarImage src={experience.logo}></AvatarImage>
                                                    <AvatarFallback>{experience.fallback}</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <CardDescription className='sm:text-xl 2xl:text-2xl'>
                                                <span className="font-semibold">{experience.title}</span></CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex flex-col  aspect-3/2 gap-2 items-center justify-center p-6">

                                            <CardDescription className='sm:text-lg 2xl:text-xl'>{experience.description}</CardDescription>
                                            <CardDescription className='sm:text-lg 2xl:text-xl'>{experience.description_2}</CardDescription>
                                            <CardDescription className='sm:text-lg 2xl:text-xl'>{experience.description_3}</CardDescription>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <Separator />
        </div>


    );
};

export default Experience;

