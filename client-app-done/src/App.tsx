import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import NavBar from './components/NavBar';
import RentalCard from './components/RentalCard';
import HeaderSection from './components/HeaderSection';
import Search from './components/Search';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function App() {
    const [filter, setFilter] = React.useState({
        searchTerm: '',
        sector: 0,
    });

    // Actualizează filtrul pe măsură ce se schimbă
    const handleFilterChange = (newFilter: any) => {
        setFilter(newFilter);
    };

    return (
        <CssVarsProvider defaultMode="system" disableTransitionOnChange>
            <CssBaseline />
            <NavBar />
            <Box
                component="main"
                sx={{
                    height: 'calc(100vh - 55px)', // 55px is the height of the NavBar
                    display: 'grid',
                    gridTemplateColumns: { xs: 'auto', md: '60% 40%' },
                    gridTemplateRows: 'auto 1fr auto',
                }}
            >
                <Stack
                    sx={{
                        backgroundColor: 'background.surface',
                        px: { xs: 2, md: 4 },
                        py: 2,
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <HeaderSection />
                    <Search />
                </Stack>
                <Stack spacing={2} sx={{ px: { xs: 2, md: 4 }, pt: 2, minHeight: 0 }}>
                    <Filters filter={filter} onFilterChange={handleFilterChange} />
                    <Stack spacing={2} sx={{ overflow: 'auto' }}>
                        <RentalCard filter={filter} />
                    </Stack>
                </Stack>
            </Box>
        </CssVarsProvider>
    );
}
