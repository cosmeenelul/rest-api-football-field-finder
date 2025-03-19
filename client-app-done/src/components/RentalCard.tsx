import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FmdGoodRounded from '@mui/icons-material/FmdGoodRounded';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/joy/Button';
import axios from 'axios';

type RentalCardProps = {
    filter: any; // Folosim filtru transmis de la App.tsx
};

export default function RentalCard({ filter }: RentalCardProps) {
    const [data, setData] = React.useState<any>([]);

    React.useEffect(() => {
        axios.get('http://localhost:8080/api/toateTerenurile') // URL-ul API-ului
            .then(response => {
                setData(response.data.content);
            })
            .catch((error) => {
                console.error('Eroare la cererea GET:', error);
            });
    }, []);

    // Aplică filtrarea
    const filteredData = data.filter((item: any) => {
        const matchesSearchTerm = item.nume.toLowerCase().includes(filter.searchTerm.toLowerCase());
        const matchesSector = filter.sector === 0 || item.sector === filter.sector;
        return matchesSearchTerm && matchesSector;
    });

    return (
        <div>
            {filteredData.map((item: any) => (
                <Card key={item.id} variant="outlined">
                    <CardOverflow>
                        <AspectRatio ratio="1">
                            <img alt={item.nume} src={item.imageUrl} />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography>{item.nume}</Typography>
                        <Typography>{item.locatie}</Typography>
                        <Typography>{item.pretPeOra}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
