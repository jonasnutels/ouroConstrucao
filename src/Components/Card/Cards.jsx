import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const FadeInCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
}));

const Cards = ({ cardsData }) => {
  if (!cardsData) return null;

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
              minHeight: 250,
              width: "100%",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              marginBottom: 2,
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardMedia
              sx={{ height: 140, border: " none", backgroundSize: "contain " }}
              image={card.imagem_url}
              title={card.nome}
            />
            <CardContent style={{ minHeight: 200 }}>
              <Typography gutterBottom variant="h5" component="div">
                {card.nome}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ minHeight: 70, maxHeight: 200, textAlign: "justify" }}
              >
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
            <Button size="small" variant="contained">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "0px",
                  margin: "0px",
                }}
                to={`https://wa.me/558230282936?text=Olá, vim pelo site e gostaria de comprar o seguinte item: ${card.nome}`}
              >
                Falar com Vendedor
              </Link>
            </Button>
            {/* <CardActions>
              <Button size="small">Adicionar ao carrinho</Button>
            </CardActions> */}
          </FadeInCard>
        );
      })}
    </>
  );
};

export default Cards;
