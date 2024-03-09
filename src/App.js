import './App.css';
import Navbar from "./views/navbar"
import Header from "./views/header"
import Experience from "./views/experience";
import Contact from "./views/contact";
import Footer from "./views/footer";
import {ThemeProvider} from "@/components/ui/theme-provider"
import * as React from "react";


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
            <div className="snap-mandatory snap-y h-screen overflow-scroll scroll-smooth">

                <Navbar/>
                <Header/>
                <Experience/>
                <Contact/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

export default App;
