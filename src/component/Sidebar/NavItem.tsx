import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link as ReactRouterLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  name: string;
}

const NavItem = ({ name, icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      as={ReactRouterLink}
      to={name}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        fontWeight="400"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.600",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
