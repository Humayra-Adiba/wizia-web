import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  Link,
} from "@nextui-org/react";

function Navigation() {
  const [isItemOpen, setItemOpen] = useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <div className="w-[100%] bg-[#002228] ">
        <Navbar
          onMenuOpenChange={setItemOpen}
          className="bg-[#002228] mx-auto " maxWidth="lg"
        >
          <NavbarContent>
            <NavbarBrand>
              <div>
                <img src="Logo.svg" alt="" className="w-[90px] h-[20px]" />
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-8 " justify="center">
            <NavbarItem>
              <Link color="foreground" setItemOpen="#" className="text-white">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link to="#" aria-current="page" className="text-white">
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" to="#" className="text-white ">
                Customers
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" to="#" className="text-white">
                Solutions
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex">
              <Link to="#">
                <Button
                  variant="solid"
                  className="bg-[#0FF1F6] rounded-full text-black hover:bg-yellow-400"
                >
                  Book a Demo
                </Button>
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden  sm:flex">
              <Link to="#">
                <Button
                  color="white"
                  variant="bordered"
                  className="rounded-full text-white hover:bg-green-500"
                >
                  Contact Us
                </Button>
              </Link>
            </NavbarItem>

            <NavbarMenuToggle
              aria-label={isItemOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
          </NavbarContent>
          <NavbarMenu className="bg-[#002228]">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-2xl pt-4 text-white"
                  to="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}

export default Navigation;
