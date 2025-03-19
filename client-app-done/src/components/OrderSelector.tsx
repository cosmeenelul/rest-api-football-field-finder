import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import React from 'react';

export default function OrderSelector() {
    return (
        <Dropdown>
            <MenuButton
                variant="plain"
                color="primary"
                endDecorator={<ArrowDropDown />}
                sx={{ whiteSpace: 'nowrap' }}
            >
                Sortează
            </MenuButton>
            <Menu sx={{ minWidth: 120 }}>
                <MenuItem>Pret: Crescator</MenuItem>
                <MenuItem>Pret: Descrescător</MenuItem>
                <MenuItem>Numar terenuri: Crescător</MenuItem>
                <MenuItem>Numar terenuri: Descrescător</MenuItem>
            </Menu>
        </Dropdown>
    );
}
