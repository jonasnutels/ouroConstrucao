import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/system';

const FadeInCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
}));

const Cards = ({ cardsData }) => {
  if (!cardsData) return null;

  return (
    <>
      {cardsData.map((card, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <FadeInCard
            key={index}
            ref={ref}
            sx={{
              maxWidth: 345,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              marginBottom: 2,
            }}
          >
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
              <Typography
                gutterBottom
                sx={{ mt: 2 }}
                variant="h5"
                component="div"
              >
                R$: 20,00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Comprar</Button>
              <Button size="small">Adicionar ao carrinho</Button>
            </CardActions>
          </FadeInCard>
        );
      })}
    </>
  );
};

export default Cards;
