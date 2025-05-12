// src/pages/TeacherLogin.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/Authcontext'; // Ajuste o caminho
import { useNavigation } from '@react-navigation/native';

const TeacherLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLoginClick = async () => {
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError('Preencha todos os campos!');
      setTimeout(() => setError(null), 5000);
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
    //   navigation.navigate('Home'); // Navegar para a página principal após login
    } catch (error) {
      setError('Email ou senha incorretos!');
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Colégio Lumiar</Text>
        <Text style={styles.subTitle}>Guia do docente</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={loading ? 'Carregando...' : 'Entrar'} onPress={handleLoginClick} disabled={loading} />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>Voltar para página inicial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  loginBox: {
    backgroundColor: '#D9D9D9',
    padding: 40,
    borderRadius: 15,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    color: '#00838F',
    fontSize: 32,
    marginBottom: 10,
    fontWeight: '700',
  },
  subTitle: {
    color: '#777',
    marginBottom: 20,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    color: '#333',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  backLink: {
    marginTop: 25,
    color: '#00838F',
    fontSize: 15,
  },
});

export default TeacherLogin;
