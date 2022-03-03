import styles from './styles';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import { RootTabScreenProps } from '../../types';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LessonPanel = () => {
  const navigation = useNavigation();

  const onDailyLessonPress = () => {
    navigation.navigate('Daily')
  }
  const onLessonPress = () => {
    navigation.navigate('NotFound')
  }

    return (
        <>
          <View style={styles.panelContainer}>
            <Text style={styles.title} >Etudier la leçon</Text>
            
            <Pressable style={styles.button}
              onPress={onDailyLessonPress}>
              <Text style={styles.text} >Leçon du jour</Text>
            </Pressable>

            <Pressable style={styles.button}
              onPress={onLessonPress}>
              <Text style={styles.text} >Leçon de la semaine</Text>
            </Pressable>

          </View>
          
           
        </>
    );
} 
export default LessonPanel;

