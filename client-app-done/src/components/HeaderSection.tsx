import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

export default function HeaderSection() {
    return (
        <Stack sx={{ mb: 2 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', width: '100%' }}>
                <Typography level="h2">Cel mai bun centralizator de terenuri din București</Typography>
            </Stack>
            <Typography level="body-md" color="neutral">
                Caută aici terenul potrivit pentru tine si prietenii tăi.
            </Typography>
        </Stack>
    );
}
