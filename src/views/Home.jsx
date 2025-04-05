import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button, buttonVariants } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';
import portfolio from '/ClaudioRodriguez2025.pdf'



const Home = () => {

    const technologies = [
        {
            title: "Frameworks backend:",
            text: [
                {
                    text: "FastApi",
                    link: "https://fastapi.tiangolo.com/"
                },
                {
                    text: "Flask",
                    link: "https://flask.palletsprojects.com/en/3.0.x/"
                },
                {
                    text: "Django", link: "https://www.djangoproject.com/"
                }]
        },
        {
            title: "Databases:",
            text: [{ text: "Postgres", link: "https://www.postgresql.org/" }, {
                text: "MySQL",
                link: "https://www.mysql.com/"
            }, { text: "SQLite", link: "https://www.sqlite.org/" }]
        },
        {
            title: "ORM:", text: [{ text: "SQLAlchemy", link: "https://www.sqlalchemy.org/" }]
        }, {
            title: "Version Control:", text: [
                { text: "Git", link: "https://git-scm.com/" },
                { text: "GitHub", link: "https://github.com/" },
                { text: "GitLab", link: "https://about.gitlab.com/" }]
        }, {
            title: "Data manipulation:",
            text: [{ text: "Pandas", link: "https://pandas.pydata.org/" }]
        },
        {
            title: "Currently learning:",
            text: [
                {
                    text: "HTML",
                    link: "https://developer.mozilla.org/es/docs/Web/HTML"
                },
                {
                    text: "CSS",
                    link: "https://developer.mozilla.org/es/docs/Web/CSS"
                },
                {
                    text: "JavaScript", link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
                },
                {
                    text: "React", link: "https://es.react.dev/"
                }]
        }
    ]

    return (
        <div id='home' className='h-full xl:h-screen'>
            <div className='h-full xl:flex xl:h-screen'>
                <div className='text-center mt-5 px-5 md:mt-10 xl:text-left xl:basis-1/2 xl:content-center xl:mt-0'>
                    <h1 className='text-4xl xl:text-5xl xl:ml-10 2xl:text-7xl'>Claudio Rodriguez</h1>
                    <h2 className='text-3xl mt-3 md:mt-5 xl:text-4xl xl:ml-10 2xl:text-6xl'>Backend Developer</h2>
                    <p className='amt-6 md:mt-10 md:px-10 xl:text-2xl'>I am a Software Developer with three years of experience in backend development, primarily working with Python. Currently, I am learning React to expand my skills and transition into a Full Stack Developer.</p>
                    <Button className='mt-6 md:mt-10 md:mx-10 rounded-[7px] hover:scale-110 focus:scale-110 active:scale-105 transition' asChild>
                        <a className='flex justify-between' href={portfolio} download>
                            <p>Download CV</p>
                            <DownloadIcon />
                        </a>
                    </Button>
                </div>
                <Separator orientation="vertical" className='hidden xl:block' />
                <div className=' md:mt-15 xl:basis-1/2 xl:mt-0 xl:content-center'>
                    <h3 className='text-2xl text-center my-5 2xl:text-4xl 2xl:my-10'>Most used technologies:</h3>
                    <div className='flex flex-col items-center md:grid md:grid-cols-3 md:content-evenly xl:grid-cols-2'>
                        {technologies.map((category, index) => (
                            <Card className="w-65 my-2 rounded-[7px] text-center mx-auto bg-card/50" key={index}>
                                <CardHeader><CardTitle>{category.title}</CardTitle></CardHeader>
                                <CardContent className='flex justify-center'>
                                    <p>[</p>
                                    {category.text.map((tech, techIndex) => (
                                        <div className="flex" key={techIndex}>
                                            {techIndex > 0 && <h2 className="mr-2">,</h2>}
                                            <a href={tech.link}>{tech.text}</a>
                                        </div>
                                    ))}
                                    <p>]</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Separator className='mt-10 xl:mt-0' />
        </div>

    );
};

export default Home;

