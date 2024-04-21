import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    
    return (
    <Box>
        <Typography
            m ="20px"
            variant="h2"
            color={color.grey[100]}
            fontWeight="bold"
        >{title}</Typography>
        <Typography
            m ="20px"
            variant="h2"
            color={color.grey[100]}
        >{subtitle}</Typography>
        
    </Box>);

};

export default Header;