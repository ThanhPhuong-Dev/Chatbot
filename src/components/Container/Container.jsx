import ImageSlider from './ImageSlider/ImageSlider';
// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ListCard from './ListCard/ListCard';
import { datas } from '../../data/data';
import ChatbotComponent from '~/ChatBot/chatbot';
function MainLayout() {
  return (
    <Box
      sx={{
        backgroundColor: '#34495e',
        // height: (theme) => `calc( 100vh - ${theme.website.headerHeight})`,
        pt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '100px',
      }}
    >
      <ImageSlider></ImageSlider>

      <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: ' repeat(5, 1fr)', gap: 2 }}>
        {datas.map((data) => (
          <ListCard key={data.id} data={data}></ListCard>
        ))}
      </Box>
      <ChatbotComponent></ChatbotComponent>
    </Box>
  );
}

export default MainLayout;
