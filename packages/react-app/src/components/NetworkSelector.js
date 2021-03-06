import React from "react";
import Select, { components } from "react-select";
import { Flex } from "@chakra-ui/core";
import { DownArrowIcon } from "../icons/DownArrowIcon";
import { NetworkIcon } from "../icons/NetworkIcon";
const { Option, DropdownIndicator } = components;

const CustomSelectOption = props => (
    <Option {...props}>
        <Flex align="center" cursor="pointer">
            {props.data.icon}
            {props.data.label}
        </Flex>
    </Option>
);

const CustomDropdownIndicator = props => {
    return (
        <DropdownIndicator {...props}>
            <Flex align="center" justify="center">
                <DownArrowIcon fontSize={8} color="black" />;
            </Flex>
        </DropdownIndicator>
    );
};

const CustomSelectValue = props => (
    <Flex align="center" fontWeight="bold">
        {props.data.icon}
        {props.data.label}
    </Flex>
);

const customStyles = {
    control: provided => ({
        ...provided,
        cursor: "pointer",
        border: "none",
        background: "transparent"
    }),
    indicatorSeparator: () => {}
};

export const networkOptions = [
    {
        value: 77,
        bridge: { chainId: 42, name: "ETH Kovan" },
        label: "Sokol",
        name: "Sokol Chain",
        icon: <NetworkIcon color="grey" mr={2} />
    },
    {
        value: 42,
        bridge: { chainId: 77, name: "Sokol Chain" },
        label: "Kovan",
        name: "ETH Kovan",
        icon: <NetworkIcon color="grey" mr={2} />
    },
    {
        value: 100,
        bridge: { chainId: 1, name: "ETH Mainnet" },
        label: "xDai",
        name: "xDai Chain",
        icon: <NetworkIcon color="grey" mr={2} />
    },
    {
        value: 1,
        bridge: { chainId: 100, name: "xDai Chain" },
        label: "Mainnet",
        name: "ETH Mainnet",
        icon: <NetworkIcon color="grey" mr={2} />
    },
];

export const NetworkSelector = ({ onChange }) => (
    <Select
        onChange={onChange}
        styles={customStyles}
        fontWeight="bold"
        defaultValue={networkOptions[0]}
        options={networkOptions}
        isClearable={false}
        isSearchable={false}
        hideSelectedOptions
        components={{
            Option: CustomSelectOption,
            SingleValue: CustomSelectValue,
            DropdownIndicator: CustomDropdownIndicator
        }}
    />
);
