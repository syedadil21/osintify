'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavbarComponent() {
  const router = useRouter();
  const path = usePathname();

  useEffect(()=>{
    console.log(path, "Path");
  },[])

  return (
    <Navbar className="shadow-xl" isBordered>
      <NavbarBrand>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem {...(path==="/features" ? {isActive:true} : {isActive:false})}>
          <Link href="/features" color="foreground">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem {...(path==="/customers" ? {isActive:true} : {isActive:false})}>
          <Link href="/customers" color="foreground" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem  {...(path==="/integrations" ? {isActive:true} : {isActive:false})}>
          <Link color="foreground" href="/integrations" >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button>Role</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      
    </Navbar>
  );
}
