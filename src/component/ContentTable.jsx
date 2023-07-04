/* eslint-disable react/prop-types */
import {
  Badge,
  Table,
  Thead,
  Tbody,
  //   Tfoot,
  Tr,
  Th,
  Td,
  //   TableCaption,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";

const ContentTable = ({ routes }) => {
  const busRoutes = routes.sort((a, b) => Number(a.number) - Number(b.number));
  return (
    <TableContainer m={2}>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Route No. ({routes.length})</Th>
            <Th>Location</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {busRoutes.map((route) => {
            return (
              <Tr key={route.id}>
                <Td>
                  <Badge
                    variant="solid"
                    colorScheme="green"
                    p={1}
                    borderRadius={5}
                    fontSize={"17px"}
                  >
                    {route.number} {route?.direction}
                  </Badge>
                </Td>
                <Td textAlign="center" colSpan={2}>
                  {route.source}
                  <Badge bg={"none"} mt={1}>
                    <span className="material-symbols-outlined">
                      multiple_stop
                    </span>
                  </Badge>
                  {route.destination}
                  <Box>
                    <Text color={"blue"}>
                      <Badge bg={"none"} mr={2} pt={1}>
                        <span className="material-symbols-outlined">
                          arrow_split
                        </span>
                      </Badge>
                      ( {route.passBy} )
                    </Text>
                  </Box>
                </Td>
                {/* <Td>
                  <Badge bg={"none"} mr={2} pt={1}>
                    <span className="material-symbols-outlined">
                      arrow_split
                    </span>
                  </Badge>

                  {route.passBy}
                </Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContentTable;
