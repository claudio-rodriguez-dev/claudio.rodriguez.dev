import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";
import {cva} from "class-variance-authority";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:shadow-lg hover:shadow-blue-500/50 border-2 border-transparent hover:border-blue-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



export default function Navbar() {
    return (
        <div className="sticky inset-x-0 top-0 bg-background z-10 w-full">
            <div className="flex items-center justify-between py-4">
                <div className="flex gap-5 items-center ml-4">
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback>CR</AvatarFallback>
                    </Avatar>

                    <h2 className="text-2xl text-primary">
                        claudio.rodriguez.dev
                    </h2>
                    <a href="https://www.linkedin.com/in/claudio-rodriguez-cu%C3%A9tara-a7482517a/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon/>
                    </a>
                    <a href="https://github.com/claudio-rodriguez-dev" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon/>
                    </a>

                </div>

                <NavigationMenu className="mr-4">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <a href="#about" id="about-tab">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#experience" id="experience-tab">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Experience
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#contact" id="contact-tab">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Separator/>
        </div>
    )
}