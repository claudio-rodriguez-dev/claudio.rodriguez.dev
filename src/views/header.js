import {Card} from "../@/components/ui/card";
import Technology from "../components/technologies_used";
import * as React from "react";


export default function Header() {
    return (
        <div id="about" aria-labelledby="about-tag"
             className="snap-always snap-start relative w-screen h-screen flex sm:flex-row flex-col justify-center items-center lg:space-x-36">
            <div
                className="flex flex-col space-y-3 mx-5 items-center text-center md:h-fit md:basis-1/2 md:space-y-10 md:text-left md:items-start md:w-auto md:mx-10">
                <h2 className="lg:text-8xl md:text-6xl text-4xl hover:text-primary">Claudio Rodriguez</h2>
                <h2 className="lg:text-7xl md:text-5xl text-3xl hover:text-primary">Backend Developer</h2>
                <h2 className="md:text-2xl md:pt-12 pt-6 sm:px-0 px-5">I'm a software developer working primarily with
                    Python and with a
                    strong enthusiasm for crafting efficient and robust backend solutions. With 3 years of experience in
                    the industry, I've sharpened my skills in designing, implementing, and optimizing backend systems to
                    meet the diverse needs of clients and projects. Currently, I'm also studying React to become a
                    full-stack developer.</h2>
            </div>
            <div className="lg:py-36 py-20 space-y-10 lg:w-auto flex hidden md:block justify-center w-full h-fit">
                <Card className="p-5 shadow-xl shadow-blue-500/50 space-y-3 lg:w-auto md:w-2/5 w-4/5">
                    <h2 className="md:text-4xl text-2xl text-center hover:text-primary">Technical skills</h2>
                    <Technology title={"Frameworks backend:"}
                                text={[{text: "FastApi", link: "https://fastapi.tiangolo.com/"}, {
                                    text: "Flask",
                                    link: "https://flask.palletsprojects.com/en/3.0.x/"
                                },
                                    {
                                        text: "Django", link: "https://www.djangoproject.com/"
                                    }]}/>
                    <Technology title={"Databases:"} text={[{text: "Postgres", link: "https://www.postgresql.org/"}, {
                        text: "MySQL",
                        link: "https://www.mysql.com/"
                    }, {text: "SQLite", link: "https://www.sqlite.org/"}]}/>
                    <Technology title={"ORM:"} text={[{text: "SQLAlchemy", link: "https://www.sqlalchemy.org/"}]}/>
                    <Technology title={"Version Control:"} text={[{text: "Git", link: "https://git-scm.com/"}]}/>
                    <Technology title={"Data manipulation:"}
                                text={[{text: "Pandas", link: "https://pandas.pydata.org/"}]}/>
                </Card>
            </div>
        </div>
    )
}