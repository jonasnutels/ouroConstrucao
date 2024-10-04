import { useState, useEffect, useContext } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  Modal,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import styles from "./Admin.module.css";
import { supabase } from "../../Supabase/Auth";
import { toast } from "sonner";
import { UserContext } from "../../Context/userContext";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { ProductContext, ProductStorage } from "../../Context/productContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ onSuccess, productToEdit, setProductToEdit }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setProductToEdit(null); // Limpar produto selecionado ao fechar o modal
  };

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    ordem: "",
    image: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct({
        id: productToEdit.id,
        name: productToEdit.nome,
        description: productToEdit.descricao,
        price: productToEdit.preco,
        ordem: productToEdit.ordem,
        image: "",
      });
      handleOpen();
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (product.image) {
      const { data, error } = await supabase.storage
        .from("produtos")
        .upload(`public/${Date.now()}_${product.image.name}`, product.image);

      if (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        toast.error("Erro ao fazer upload da imagem");
        return;
      }

      const { data: data2 } = supabase.storage
        .from("produtos")
        .getPublicUrl(data.path);

      imageUrl = data2.publicUrl;
    }

    if (productToEdit) {
      // Editar produto
      const { error } = await supabase
        .from("produtos")
        .update({
          nome: product.name,
          descricao: product.description,
          preco: product.price,
          ordem: product.ordem,
          imagem_url: imageUrl || productToEdit.imagem_url,
        })
        .eq("id", product.id);

      if (error) {
        console.error("Erro ao editar produto:", error);
        toast.error("Erro ao editar produto");
        return;
      }
      toast.success("Produto editado com sucesso");
    } else {
      // Adicionar novo produto
      const { data, error } = await supabase.from("produtos").insert([
        {
          nome: product.name,
          descricao: product.description,
          preco: product.price,
          habilitado: true,
          ordem: product.ordem,
          imagem_url: imageUrl,
        },
      ]);

      if (error) {
        console.error("Erro ao adicionar produto:", error);
        toast.error("Erro ao adicionar produto");
        return;
      }
      toast.success("Produto adicionado com sucesso");
    }

    handleClose();
    onSuccess();

    setProduct({
      name: "",
      description: "",
      price: "",
      ordem: "",
      image: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({
        ...product,
        image: files[0],
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        {productToEdit ? "Editar Produto" : "Cadastrar Produto"}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nome do Produto"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descrição"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Preço"
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ordem"
                  name="ordem"
                  type="number"
                  value={product.ordem}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="image-upload"
                  type="file"
                  name="image"
                  onChange={handleChange}
                />
                <label htmlFor="image-upload">
                  <Button variant="contained" component="span">
                    Upload Imagem
                  </Button>
                  {product.image && (
                    <span style={{ marginLeft: "10px" }}>
                      {product.image.name}
                    </span>
                  )}
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Cadastrar Produto
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
function AdminDash() {
  const { handleLogout } = useContext(UserContext);
  const { products, fetchProducts, handleDelete, handleToggle } =
    useContext(ProductContext);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    fetchProducts();
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
  };
  return (
    <div className={styles.formContainer}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Cadastro de Produtos
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <BasicModal
            onSuccess={handleProductAdded}
            productToEdit={productToEdit}
            setProductToEdit={setProductToEdit}
          />
          <Button variant="contained" onClick={handleLogout}>
            Sair
          </Button>
        </Box>

        <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
          Produtos Cadastrados
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ordem</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Imagem</TableCell>
                <TableCell
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Ação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products
                  .sort((a, b) => a.ordem - b.ordem)
                  .map((prod, index) => (
                    <TableRow key={prod.id}>
                      <TableCell>{prod.ordem}</TableCell>
                      <TableCell>{prod.nome}</TableCell>
                      <TableCell>{prod.descricao}</TableCell>
                      <TableCell>{prod.preco}</TableCell>
                      <TableCell>
                        {prod.imagem_url && (
                          <img
                            src={prod.imagem_url}
                            alt={prod.nome}
                            style={{ maxWidth: "80px", maxHeight: "80px" }}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "red",
                          }}
                        >
                          <Tooltip
                            title={
                              prod.habilitado ? "Desabilitar" : "Habilitar"
                            }
                          >
                            <Switch
                              checked={prod.habilitado}
                              onChange={() => handleToggle(index)}
                              color="primary"
                            />
                          </Tooltip>
                          <Tooltip title="Editar">
                            <IconButton onClick={() => handleEdit(prod)}>
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton onClick={() => handleDelete(prod.id)}>
                              <DeleteOutline style={{ color: "red" }} />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default AdminDash;
