import React, { useContext } from "react";
import Web3Context from "../lib/Web3Context";
import { HStack, Flex, Button, Text, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { WalletIcon } from "../icons/WalletIcon";
import { HistoryIcon } from "../icons/HistoryIcon";
import { NetworkSelector } from "./NetworkSelector";

const getAccountString = account => {
    const len = account.length;
    return account.substr(0, 6) + "..." + account.substr(len - 4, len - 1);
};

export const Header = () => {
    const { connectWeb3, setNetwork, account } = useContext(Web3Context);

    return (
        <Flex
            justify="space-between"
            align="center"
            h={20}
            maxW={"75rem"}
            px={8}
            w={"100%"}
            zIndex={2}
        >
            <Link to="/">
                <Flex justify="space-around" align="center">
                    <Image src={Logo} mr={4} />
                    <Text fontWeight="bold">Multi Token Bridge</Text>
                </Flex>
            </Link>
            <HStack spacing={4}>
                <Link to="/history">
                    <Flex align="center" px={4} fontWeight="bold">
                        <HistoryIcon color="grey" mr={2} />
                        History
                    </Flex>
                </Link>
                <Flex>
                    {!account && (
                        <Button onClick={connectWeb3} colorScheme="blue">
                            <WalletIcon mr={2} />
                            Connect Wallet
                        </Button>
                    )}
                    {account && (
                        <Button colorScheme="blue">
                            <WalletIcon mr={2} />
                            <Text> {getAccountString(account)} </Text>
                        </Button>
                    )}
                </Flex>
                <Flex>
                    <NetworkSelector
                        onChange={_network => setNetwork(_network)}
                    />
                </Flex>
            </HStack>
        </Flex>
    );
};
