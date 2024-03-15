import {
  Button,
  InputGroup,
  InputRightElement,
  chakra,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

import InputBase from "@/compositions/Input/InputBase";

export default function Search() {
  const { push } = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    push(`/products/search?name=${search}`);
    setSearch("");
  };

  return (
    <>
      <StyledInputGroup size="md">
        <InputBase
          errorIcon={true}
          placeholder="Search for products..."
          onChange={(value) => {
            setSearch(value.target.value);
          }}
          _placeholder={{ opacity: 1, color: "primary.main" }}
        />

        <StyledInputRightElement width="4.5rem">
          <StyledButton h="1.75rem" size="sm" onClick={handleClick}>
            <FaSearch color="#37AFE3" />
          </StyledButton>
        </StyledInputRightElement>
      </StyledInputGroup>
    </>
  );
}

const StyledButton = chakra(Button, {
  baseStyle: {
    background: "transparent",
    padding: "0",

    "& svg": {
      width: "20px",
      height: "18px",
    },
  },
});

const StyledInputRightElement = chakra(InputRightElement, {
  baseStyle: {
    width: "45px !important",
  },
});

const StyledInputGroup = chakra(InputGroup, {
  baseStyle: {
    "& input": {
      height: "40px",
    },

    "& .chakra-input__right-element": {
      width: "45px !important",
    },
  },
});
