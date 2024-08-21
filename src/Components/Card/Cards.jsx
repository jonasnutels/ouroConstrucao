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
  console.log(cardsData);

  return (
    <>
      {cardsData.map((card, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.4,
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
              boxShadow: 'none',
            }}
          >
            <CardMedia
              sx={{ height: 140, border: ' none', backgroundSize: 'contain ' }}
              image={card.imagem_url}
              title={card.nome}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.descricao}
              </Typography>
              <Typography
                gutterBottom
                sx={{ mt: 2 }}
                variant="h5"
                component="div"
              >
                R$: {card.preco}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Comprar</Button>
              <Button size="small">Adicionar ao carrinho</Button>
            </CardActions> */}
          </FadeInCard>
        );
      })}
    </>
  );
};

export default Cards;
