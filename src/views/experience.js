import {Card} from "../@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "../@/components/ui/avatar";
import * as React from "react";
import Technology from "../components/technologies_used";
import {Separator} from "../@/components/ui/separator";
import zener from "img/zener_logo.jpeg"
import baobab from "img/baobab_logo.jpeg"
import inforyde from "img/inforyde_logo.jpeg"


function ExperienceCard({experience}) {
    return (
        <Card className="basis-1/4 shadow-md shadow-blue-500/50 flex flex-col space-y-5 p-10 items-center">
            <div className="flex gap-5 items-center">
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <Avatar>
                        <AvatarImage src={experience.logo}/>
                        <AvatarFallback>{experience.fallback}</AvatarFallback>
                    </Avatar>
                </a>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-5xl hover:text-primary">{experience.title}</h2>
                </a>
            </div>
            <h2>{experience.duration}</h2>
            <Separator/>
            <h2 className="text-3xl">Technologies used:</h2>
            <div className="items-start space-y-3">
                {experience.technologies.list}
            </div>

        </Card>
    )
}

function ExperienceCardList() {
    return (
        <div className="flex h-screen items-center">
            <div className="flex w-screen justify-center gap-20">
                <ExperienceCard
                experience={{
                    logo: zener,
                    fallback: "ZN",
                    title: "Zener",
                    duration: "mar. 2021 - mar. 2022",
                    link: "https://www.zener.es/en/",
                    technologies: {
                        list: [
                            <Technology title={"Framework backend:"}
                                        text={[{text: "Django", link: "https://www.djangoproject.com/"}]}/>,
                            <Technology title={"Databases:"} text={[{
                                text: "MySQL",
                                link: "https://www.mysql.com/"
                            }, {text: "SQLite", link: "https://www.sqlite.org/"}]}/>,
                            <Technology title={"Version Control:"}
                                        text={[{text: "Git", link: "https://git-scm.com/"}]}/>,

                            <Technology title={"Mobile Development:"} text={[{
                                text: "Android (Java)",
                                link: "https://developer.android.com/studio"
                            }]}/>

                        ]
                    }
                }}/>
            <ExperienceCard
                experience={{
                    logo: inforyde,
                    fallback: "IF",
                    title: "Inforyde",
                    duration: "jul. 2022 - jul. 2023",
                    link: "https://inforyde.com/en/home-2/",
                    technologies: {list: [
                        <Technology title={"Frameworks backend:"}
                                text={[{text: "FastApi", link: "https://fastapi.tiangolo.com/"}, {
                                    text: "Flask",
                                    link: "https://flask.palletsprojects.com/en/3.0.x/"
                                }]}/>,
                        <Technology title={"Databases:"} text={[{
                        text: "MySQL",
                        link: "https://www.mysql.com/"
                    }]}/>,
                        <Technology title={"ORM:"} text={[{text: "SQLAlchemy", link: "https://www.sqlalchemy.org/"}]}/>,
                        <Technology title={"Version Control:"} text={[{text: "Git", link: "https://git-scm.com/"}]}/>,
                        <Technology title={"Data manipulation:"}
                                text={[{text: "Pandas", link: "https://pandas.pydata.org/"}]}/>

                        ]}
                }}/>
            <ExperienceCard
                experience={{
                    logo: baobab,
                    fallback: "BS",
                    title: "BaobabSoluciones",
                    duration: "jan. 2024 - now",
                    link: "https://baobabsoluciones.es/",
                    technologies: {list: [
                        <Technology title={"Frameworks backend:"}
                                text={[{text: "FastApi", link: "https://fastapi.tiangolo.com/"}, {
                                    text: "Flask",
                                    link: "https://flask.palletsprojects.com/en/3.0.x/"
                                }]}/>,
                        <Technology title={"Databases:"} text={[{text: "Postgres", link: "https://www.postgresql.org/"}]}/>,
                        <Technology title={"ORM:"} text={[{text: "SQLAlchemy", link: "https://www.sqlalchemy.org/"}]}/>,
                        <Technology title={"Version Control:"} text={[{text: "Git", link: "https://git-scm.com/"}]}/>,
                        <Technology title={"Data manipulation:"}
                                text={[{text: "Pandas", link: "https://pandas.pydata.org/"}]}/>

                        ]}
                }}/>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <div id="experience" aria-labelledby="experience-tab" className="snap-always snap-start relative w-screen h-screen">
            <ExperienceCardList/>
        </div>
    )
}