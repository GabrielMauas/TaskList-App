import { Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';

function Stats({ tasks }) {

    const border = useColorModeValue("gray.300", "gray.700");

    return (
        <Stat w={["40%", "20%"]} textAlign="center" borderWidth="1px" borderRadius="10" borderColor={border} p="3">
            <StatLabel fontSize="l" fontWeight="semibold">To do:</StatLabel>
            <StatNumber> { tasks } </StatNumber>
        </Stat>
    )
}

export default Stats
