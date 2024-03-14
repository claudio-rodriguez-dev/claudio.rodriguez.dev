import {Card} from "../@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "../@/components/ui/avatar";
import * as React from "react";
import {Separator} from "../@/components/ui/separator";
import {experienceList} from "../data/experience";
import {DoubleArrowDownIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";


function ExperienceCard({experience}) {
    return (
        <Card className="flex flex-col shadow-md shadow-blue-500/50 space-y-3 p-8 mx-3 z-10">
            <div className="flex gap-3 items-center">
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <Avatar>
                        <AvatarImage src={experience.logo}/>
                        <AvatarFallback>{experience.fallback}</AvatarFallback>
                    </Avatar>
                </a>
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                    <h2 className="hover:text-primary">{experience.title}</h2>
                </a>
            </div>
            <h2>{experience.duration}</h2>
            <Separator/>
            <h2 className="">Technologies used:</h2>
            <div className="items-start space-y-3">
                {experience.technologies.list}
            </div>

        </Card>
    )
}

function ExperienceCardList() {
    return (

        <div className="flex h-screen items-center">
            <div className="flex w-screen snap-x snap-mandatory overflow-scroll">
                {experienceList.map((experience, i) =>
                    <div className="snap-always snap-center min-w-full h-screen flex items-center justify-center">
                        {i > 0 &&
                            <div className="md:hidden relative inset-x-0 flex justify-center pb-3">
                                <DoubleArrowLeftIcon width="30" height="30"/>
                            </div>
                        }
                        <ExperienceCard experience={experience}/>
                        {i < experienceList.length - 1 &&
                            <div className="md:hidden relative inset-x-0 flex justify-center pb-3">
                                <DoubleArrowRightIcon width="30" height="30"/>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}


export default function ExperienceCarousel() {
    return (
        <div id="experience" aria-labelledby="experience-tab"
             className="snap-always snap-start relative w-screen h-screen lg:hidden">
            <ExperienceCardList/>
            <div className="md:hidden sticky bottom-0 inset-x-0 flex justify-center pb-5 animate-bounce animation">
                <DoubleArrowDownIcon width="30" height="30"/>
            </div>
        </div>
    )
}