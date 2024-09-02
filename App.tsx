import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import axios from 'axios';
import { styles } from './styles/styles';
import ButtonComponent from './components/Button';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMemes = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      if (response.data.success) {
        const memes = response.data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        setData(randomMeme); // Set the fetched random meme
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchMemes(); // Fetch a meme when the component mounts
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>😅 Memes Generator</Text>
      {data ? (
        <Image
          source={{ uri: data.url }} // Use the URL of the fetched meme
          style={{ width: '90%', height: '70%' }}
        />
      ) : (
        <Text>Sorry, no meme found</Text>
      )}
      <ButtonComponent title="Click me" onPress={fetchMemes} />
      <StatusBar style="auto" />
    </View>
  );
}
