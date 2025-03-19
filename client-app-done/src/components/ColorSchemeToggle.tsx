// import * as React from 'react';
// import { useColorScheme } from '@mui/joy/styles';
// import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
// import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
//
// export default function NightModeToggle(props: IconButtonProps) {
//     const { onClick, sx, ...other } = props;
//     const { setMode } = useColorScheme();
//
//     React.useEffect(() => {
//         // Setează permanent modul pe 'dark' la montarea componentei
//         setMode('dark');
//     }, [setMode]);
//
//     return (
//         <IconButton
//             data-screenshot="toggle-night-mode"
//             size="sm"
//             variant="outlined"
//             color="neutral"
//             {...other}
//             sx={[...(Array.isArray(sx) ? sx : [sx])]}
//         >
//             <DarkModeRoundedIcon />
//         </IconButton>
//     );
// }
