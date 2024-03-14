import './App.css';
import Navbar from "./views/navbar"
import Header from "./views/header"
import Experience from "./views/experience";
import Contact from "./views/contact";
import {ThemeProvider} from "@/components/ui/theme-provider"
import * as React from "react";
import ExperienceCarousel from "./views/experience_carousel";
import {DoubleArrowDownIcon} from "@radix-ui/react-icons";


function App() {
    return (
        <html>
        <body className="overflow-hidden">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="snap-mandatory snap-y h-screen overflow-scroll overflow-x-hidden scroll-smooth">

                <Navbar/>
                <Header/>
                <div className="md:hidden sticky bottom-0 inset-x-0 flex justify-center pb-10 animate-bounce">
                    <DoubleArrowDownIcon width="30" height="30"/>
                </div>
                <Experience/>
                <ExperienceCarousel/>
                <Contact/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default App;
