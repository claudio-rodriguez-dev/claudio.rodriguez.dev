"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { toast } from "sonner"



export default function Contact() {


    const contactSchema = z.object({
        name: z.string().min(1),
        email: z.string().email().min(1),
        company: z.string().optional().default(""),
        message: z.string().min(1)
    });

    const form = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        toast(`Sorry ${data.name}, this feature has not been implemented yet.`)
    };
    return (
        <div id="contact" className="h-full lg:content-center xl:h-screen">
            <Card className='rounded-[7px] mx-5 max-w-3xl my-10 lg:mx-auto bg-card/50'>
                <CardHeader>
                    <CardTitle><h3 className="text-2xl">Contact:</h3></CardTitle>
                    <CardDescription className='flex items-center gap-1.5'>
                        <EnvelopeClosedIcon />
                        <p>claudio.rodriguez.dev@gmail.com</p>
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-5 py-5">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name*</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Your name."
                                            className='rounded-[7px]'
                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email*</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="example@gmail.com"
                                            className='rounded-[7px]'
                                            type="email"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Your company or website (optional)."
                                            className='rounded-[7px]'
                                            type="text"
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message*</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Got an idea? Share it with me here!"
                                            className="resize-none rounded-[7px]"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='rounded-[7px] cursor-pointer' type="submit">Submit</Button>
                    </form>
                </Form>
            </Card>
        </div>
    );
};
