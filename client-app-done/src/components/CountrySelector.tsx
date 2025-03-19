import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import AspectRatio from '@mui/joy/AspectRatio';
import FormControl, { FormControlProps } from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import React from 'react';

export default function ContrySelector(props: FormControlProps) {
    const { sx, ...other } = props;
    return (
        <FormControl {...other} sx={sx}>
            <FormLabel>Sector</FormLabel>
            <Autocomplete
                autoHighlight
                isOptionEqualToValue={(option, value) => option.sector === value.sector}
                options={sectoare}
                renderOption={(optionProps, option) => (
                    <AutocompleteOption {...optionProps}>
                        <ListItemDecorator>
                            <AspectRatio ratio="1" sx={{ minWidth: 20, borderRadius: '50%' }}></AspectRatio>
                        </ListItemDecorator>
                        {option.label}
                    </AutocompleteOption>
                )}
                slotProps={{
                    input: {
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    },
                }}
            />
        </FormControl>
    );
}

interface CountryType {
    sector: number;
    label: string;
}

// Definirea sectoarelor
const sectoare: readonly CountryType[] = [
    { sector: 1, label: 'Sector 1' },
    { sector: 2, label: 'Sector 2' },
    { sector: 3, label: 'Sector 3' },
    { sector: 4, label: 'Sector 4' },
    { sector: 5, label: 'Sector 5' },
];
