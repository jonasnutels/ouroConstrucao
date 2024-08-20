import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Cards = ({ cardsData }) => {
  if (!cardsData) return null;
  return (
    <>
      {cardsData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Comprar</Button>
            <Button size="small">Adicionar ao carrinho</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Cards;
