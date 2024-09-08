import { createContext, useState } from 'react';
import { supabase } from '../Supabase/Auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState();
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleLogin(email, senha) {
   setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
      });

      if (error) {
        toast.error('Usuário ou senha inválido :(');
        setLoading(false)
      } else {
        toast.success('Logado com sucesso (:');
        setLoading(false)
        setUsuario(data.user);
        setAutenticado(true);
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      }
    } catch (error) {
      setLoading(false)
      console.error('Erro ao fazer login:', error.message);
    }finally{
      setLoading(false)
    }
  }
  async function handleAutoLogin() {
    try {
      const { data, error } = await supabase.auth.refreshSession();

      if (error) {
        console.error('Erro ao renovar sessão:', error.message);
      } else if (data) {
        setUsuario(data.user);
        setAutenticado(true);
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      }
    } catch (error) {
      console.error('Erro ao renovar sessão:', error.message);
    }
  }
  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Erro ao fazer logout:', error.message);
        toast.error('Erro ao fazer logout');
      } else {
        toast.success('Desconectado com sucesso');
        setUsuario(null);
        setAutenticado(false);
        navigate('/'); // Redireciona para a página de login ou outra página pública
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  }

  


  return (
    <UserContext.Provider
      value={{
        usuario,
        autenticado,
        loading,
        handleLogin,
        handleAutoLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
