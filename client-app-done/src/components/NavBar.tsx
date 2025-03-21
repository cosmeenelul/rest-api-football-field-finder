import { Box, IconButton } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';


export default function HeaderSection() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                top: 0,
                px: 1.5,
                py: 1,
                zIndex: 10000,
                backgroundColor: 'background.body',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton size="sm" variant="soft">
                    <YoutubeSearchedForIcon />
                </IconButton>
                <Typography component="h1" sx={{ fontWeight: 'xl' }}>
                    Find My: Teren
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Box
                    sx={{ gap: 1, alignItems: 'center', display: { xs: 'none', sm: 'flex' } }}
                >
                </Box>
            </Box>
        </Box>
    );
}
