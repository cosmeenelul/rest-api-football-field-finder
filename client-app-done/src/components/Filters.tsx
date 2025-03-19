import React from 'react';
import { Select, MenuItem, FormControl, FormLabel, Input } from '@mui/joy';

type FiltersProps = {
    filter: any;
    onFilterChange: (newFilter: any) => void;
};

const Filters: React.FC<FiltersProps> = ({ filter, onFilterChange }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({
            ...filter,
            searchTerm: event.target.value,
        });
    };

    const handleSectorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const sector = event.target.value as number;
        onFilterChange({
            ...filter,
            sector,
        });
    };

    return (
        <div>
            {/* Folosim Input în loc de TextField */}
            <FormControl fullWidth>
                <FormLabel>Search</FormLabel>
                <Input
                    value={filter.searchTerm}
                    onChange={handleSearchChange}
                    variant="outlined"
                    fullWidth
                />
            </FormControl>

            <FormControl fullWidth>
                <Select
                    value={filter.sector}
                    onChange={handleSectorChange}
                    label="Sector"
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Sector 1</MenuItem>
                    <MenuItem value={2}>Sector 2</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Filters;
