'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import osintifyLogo from '../assets/osintifyLogo.png'

export default function NavbarComponent() {
  const router = useRouter();
  const path = usePathname();



  return (
    <>
      {path !=='/' && <Navbar className="shadow-xl dark text-foreground " isBordered>
        <NavbarBrand>
          <Image src={osintifyLogo} width={250} alt="Logo"/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem {...(path==="/newScans" ? {isActive:true} : {isActive:false})}>
            <Link href="/newScans" color="foreground" aria-current="page">
              New Scans
            </Link>
          </NavbarItem>
          <NavbarItem  {...(path==="/scans" ? {isActive:true} : {isActive:false})}>
            <Link color="foreground" href="/scans" >
              Scans
            </Link>
          </NavbarItem>
          {/* <NavbarItem {...(path==="/settings" ? {isActive:true} : {isActive:false})}>
            <Link href="/settings" color="foreground">
              Settings
            </Link>
          </NavbarItem> */}
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button>Role</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">test1@gmail.com</p>
              </DropdownItem>
              <DropdownItem key="lea">Law enforcement agency</DropdownItem>
              <DropdownItem key="pi">Private Investigator</DropdownItem>
              <DropdownItem key="pu">Personal use</DropdownItem>
              {/* <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
              <DropdownItem key="logout" color="danger" onPress={()=> router.push('/')}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}

        
      </Navbar>}
    </>
  );
}
