import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getPosts, deletePost } from './api';
import { Post } from './types';

// Aqui você deve importar os componentes/páginas mobile
// import Header from './components/HeaderMobile';
// import Footer from './components/FooterMobile';
// import MainContent from './components/MainContentMobile';
// import AddPost from './pages/AddPost/AddPost';
// import ModificaPost from './pages/ModificaPost/ModificaPost';
// import Login from './pages/Login/Login';
// import PostDetail from './pages/LerPost/LerPost';
// import PostList from './pages/PostList/PostList';

const Stack = createNativeStackNavigator();

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter(post =>
      post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.conteudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.autor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPosts();
      if (data.length > 0) {
        setPosts(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      setError('Erro ao buscar posts. Tente novamente mais tarde.');
      setMensagem('Erro ao buscar posts. Tente novamente mais tarde.');
      setTimeout(() => setMensagem(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = (id: string) => {
    deletePost(id);
    setPosts(currentPosts => currentPosts.filter(post => post._id !== id));
    setMensagem('Post deletado com sucesso!');
    setTimeout(() => setMensagem(null), 5000);
  };

  const handlePostCreate = useCallback(() => {
    fetchPosts();
    setMensagem('Post criado com sucesso!');
    setTimeout(() => setMensagem(null), 5000);
  }, []);

  const handlePostUpdated = useCallback(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#00838F" />
        <Text>Carregando posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {mensagem && (
        <View style={styles.message}>
          <Text style={styles.messageText}>{mensagem}</Text>
        </View>
      )}
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => (
            <View style={styles.container}>
              <TextInput
                placeholder="Buscar..."
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.searchInput}
              />
              {/* <PostList posts={filteredPosts} onDeletePost={handleDeletePost} /> */}
            </View>
          )}
        </Stack.Screen>
        {/* <Stack.Screen name="Criar Postagem">
          {() => <AddPost onPostCreate={handlePostCreate} />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes do Post" component={PostDetail} />
        <Stack.Screen name="Modificar Postagem">
          {() => <ModificaPost posts={posts} onPostUpdate={handlePostUpdated} />}
        </Stack.Screen>
        <Stack.Screen name="Login Docente" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#00838F',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    backgroundColor: '#4CAF50',
    padding: 10,
  },
  messageText: {
    color: '#fff',
    textAlign: 'center',
  },
});