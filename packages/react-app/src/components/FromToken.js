import React, { useState } from "react";
import { Flex, Text, Button, Image, Input } from "@chakra-ui/core";
import xDAILogo from "../assets/xdai-logo.png";
import DropDown from "../assets/drop-down.svg";

function FromToken() {
    const token = {
        name: "STAKE",
        balance: "390.0",
        balanceInUsd: "0",
        logo: xDAILogo
    };
    const [amount, setAmount] = useState(0);
    return (
        <Flex
            align="center"
            mr={{ base: -4, md: -4, lg: -6 }}
            position="relative"
        >
            <svg width="100%" viewBox="0 0 381 94" fill="none">
                <path
                    d="M359.745 4.703A7.5 7.5 0 00353.008.5H8A7.5 7.5 0 00.5 8v78A7.5 7.5 0 008 93.5h345.008a7.5 7.5 0 006.737-4.203l19.085-39a7.499 7.499 0 000-6.594l-19.085-39z"
                    fill="#fff"
                    stroke="#DAE3F0"
                />
            </svg>
            <Flex
                position="absolute"
                w="100%"
                h="100%"
                direction="column"
                py={4}
                pl={4}
                pr={12}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    color="grey"
                    mb={2}
                >
                    <Text>{`Balance: ${token.balance}`}</Text>
                    <Text>{`\u2248 $${token.balanceInUsd}`}</Text>
                </Flex>
                <Flex align="center" flex={1}>
                    <Flex align="center" cursor="pointer">
                        <Flex
                            justify="center"
                            align="center"
                            background="white"
                            border="1px solid #DAE3F0"
                            boxSize={8}
                            overflow="hidden"
                            borderRadius="50%"
                        >
                            <Image src={token.logo} />
                        </Flex>
                        <Text fontSize="lg" fontWeight="bold" mx={2}>{token.name}</Text>
                        <Image src={DropDown} cursor="pointer"/>
                    </Flex>
                    <Flex align="center" justify="flex-end" flex={1}>
                        <Input
                            variant="unstyled"
                            type="number"
                            value={amount}
                            textAlign="right"
                            fontWeight="bold"
                            onChange={e => setAmount(e.target.value)}
                            fontSize="3xl"
                        />
                        <Button
                            ml={2}
                            color="blue.500"
                            bg="blue.50"
                            size="sm"
                            fontSize="sm"
                            fontWeight="normal"
                            _hover={{ bg: "blue.100" }}
                            onClick={() => setAmount(token.balance)}
                        >
                            Max
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default FromToken;
