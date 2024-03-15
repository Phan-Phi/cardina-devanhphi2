import CountUp from "react-countup";
import { Box, ExtendTheme, Heading, chakra } from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useState } from "react";

interface Props {
  dataCountItem: any;
}

export default function CountItem({ dataCountItem }: Props) {
  const [state, setState] = useState<boolean>(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName("aos-animate");
      if (element) {
        // element.style.height = "1px";
        setState(true);
      }
    }, 1000);
  }, []);

  if (dataCountItem == undefined) return;
  const { value, unit, perValue } = dataCountItem;

  return (
    <Box>
      <WrapperCount>
        {/* {state && (
          <CountUp
            className="CountUp"
            enableScrollSpy={false}
            start={0}
            end={value}
            duration={2.75}
          />
        )} */}
        <Count variant="h1">{value}</Count>
        {/* {!state && <Count variant="h1">{value}</Count>} */}
      </WrapperCount>

      <Box>
        <MG variant="p4">{unit}</MG>
        <Text variant="p4">{perValue}</Text>
      </Box>
    </Box>
  );
}

const Text = chakra(Heading, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;

    return {
      color: "white",

      [theme.breakpoints.smDown]: {
        fontSize: "12px",
        lineHeight: "14.4px",
        fontWeight: 400,
      },
    };
  },
});
const MG = chakra(Heading, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;

    return {
      color: "primary.main",

      [theme.breakpoints.smDown]: {
        fontSize: "12px",
        lineHeight: "14.4px",
        fontWeight: 400,
      },
    };
  },
});

const Count = chakra(Heading, {
  baseStyle(props) {
    const theme = props.theme;
    return {
      color: "white",
      lineHeight: "52px",
      marginLeft: "1rem",

      [theme.breakpoints.smDown]: {
        fontSize: "32px",
        lineHeight: "38.4px",
        fontWeight: 400,
      },

      [theme.breakpoints.mdDown]: {
        fontSize: "48px",
        lineHeight: "57.6px",
        fontWeight: 400,
      },
    };
  },
});

const WrapperCount = chakra(Box, {
  baseStyle(props) {
    const theme = props.theme as ExtendTheme;
    return {
      borderLeft: `5px solid ${theme.colors.primary.main}`,
      marginBottom: "1rem",

      [theme.breakpoints.smDown]: {
        marginBottom: "0.5rem",
      },
    };
  },
});
