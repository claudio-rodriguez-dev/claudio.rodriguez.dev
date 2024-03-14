import {Card} from "../@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "../@/components/ui/avatar";
import * as React from "react";
import {Separator} from "../@/components/ui/separator";
import {experienceList} from "../data/experience";


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
                {experienceList.map(experience =>
                    <ExperienceCard experience={experience}/>
                )}
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <div id="experience" aria-labelledby="experience-tab"
             className="snap-always snap-start relative w-screen h-screen hidden lg:block">
            <ExperienceCardList/>
        </div>
    )
}