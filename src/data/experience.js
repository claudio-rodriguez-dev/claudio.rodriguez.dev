import * as React from "react";
import Technology from "../components/technologies_used";
import zener from "img/zener_logo.jpeg"
import baobab from "img/baobab_logo.jpeg"
import inforyde from "img/inforyde_logo.jpeg"

export const experienceList = [
        {
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
        },
        {
            logo: inforyde,
            fallback: "IF",
            title: "Inforyde",
            duration: "jul. 2022 - jul. 2023",
            link: "https://inforyde.com/en/home-2/",
            technologies: {
                list: [
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

                ]
            }
        },
        {
            logo: baobab,
            fallback: "BS",
            title: "BaobabSoluciones",
            duration: "jan. 2024 - now",
            link: "https://baobabsoluciones.es/",
            technologies: {
                list: [
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

                ]
            }
        },
    ]
