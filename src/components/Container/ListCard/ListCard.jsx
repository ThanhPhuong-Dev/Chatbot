import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { IoTimeOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Typography from '@mui/material/Typography';

function ListCard({ data }) {
  console.log(data);

  return (
    <Card
      sx={{
        maxWidth: 240,
        minWidth: 240,

        borderRadius: '10px',
        '& .MuiCardContent-root': {
          padding: '10px',
        },
      }}
    >
      <CardMedia component="img" height="194" image={data.image} alt="Paella dish" />
      <CardContent>
        <Typography sx={{ fontWeight: 600 }} variant="h8" color="text.primary">
          {data.title}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          sx={{ fontWeight: 600, mr: 1, display: 'flex', alignItems: 'center', gap: 1 }}
          variant="h8"
          color="text.primary"
        >
          <IoTimeOutline></IoTimeOutline>
          Thời Gian:
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="span" color="text.primary">
          {data.time}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          sx={{ fontWeight: 600, mr: 1, display: 'flex', alignItems: 'center', gap: 1 }}
          variant="h8"
          color="text.primary"
        >
          <FaRegCalendarAlt></FaRegCalendarAlt>
          Khởi Hành:
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="span" color="text.primary">
          {data.start}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
        <Button
          sx={{
            bgcolor: '#cca77f',
            '&:hover': {
              bgcolor: '#2c3e50',
            },
          }}
          variant="contained"
        >
          Liên Hệ
        </Button>
      </Box>
    </Card>
  );
}

export default ListCard;
