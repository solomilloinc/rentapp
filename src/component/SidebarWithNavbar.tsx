import {
  Box,
  Drawer,
  DrawerContent,
  Fade,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function SidebarWithHeader({ children }: { children?: React.ReactNode }): any {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Navbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </>
  );
}

export default SidebarWithHeader;
