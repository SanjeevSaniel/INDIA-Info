/* eslint-disable react/prop-types */
import { Grid, GridItem, Tag, Text } from "@chakra-ui/react";
import ContentTable from "./ContentTable";

const Context = ({ routes }) => {
  return (
    // <Box bg="grey" w="100%" h="fit-content" p={4} mt={4} color="white">
    <Grid
      mt={4}
      h="200px"
      templateRows="1fr"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={4}>
        <Text m={3} fontSize="2xl">
          City:
          <Tag mt={1} ml={2} size={"lg"}>
            Raurkela
          </Tag>
        </Text>

        <ContentTable routes={routes} />
      </GridItem>
      <GridItem colSpan={1} bg="transparent" />
    </Grid>
    // </Box>
  );
};

export default Context;
