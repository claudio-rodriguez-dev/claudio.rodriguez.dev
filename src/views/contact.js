import {Input} from "../@/components/ui/input";
import {Textarea} from "../@/components/ui/textarea";
import {Button} from "../@/components/ui/button";
import {Card} from "../@/components/ui/card";
import Footer from "./footer";
import * as React from "react";


export default function Contact(){
    return (
        <div id="contact" aria-labelledby="contact-tag" className="snap-always snap-start relative w-screen h-screen">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <Card className="flex flex-col items-center z-10 shadow-lg shadow-blue-500/50 lg:space-y-10 lg:p-10 p-5 m-5 space-y-5">
                    <h2 className="lg:text-6xl text-2xl">Contact me</h2>

                    <div className="lg:space-y-6 space-y-3">
                        <div className="flex lg:space-x-4">
                            <div className="space-y-1">
                                <h2>First name</h2>
                                <Input/>
                            </div>
                            <div className="space-y-1">
                                <h2>Last name</h2>
                                <Input/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h2>Company</h2>
                            <Input/>
                        </div>
                        <div className="space-y-1">
                            <h2>Email</h2>
                            <Input/>
                        </div>
                        <div className="space-y-1">
                            <h2>Message</h2>
                            <Textarea/>
                        </div>
                        <div className="flex flex-col">
                            <Button>Let's talk</Button>
                        </div>

                    </div>
                </Card>
            </div>
                <Footer/>
        </div>
    )
}