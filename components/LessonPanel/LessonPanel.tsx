import styles from './styles';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import { RootTabScreenProps } from '../../types';
import { Pressable } from 'react-native';

const LessonPanel = () => {
    return (
        <>
          <View style={styles.panelContainer}>
            <Text style={styles.title} >Etudier la leçon</Text>
            
            <Pressable style={styles.button}
              onPress={() => console.warn
              ('Button Pressed!')}>
              <Text style={styles.text} >Leçon du jour</Text>
            </Pressable>

            <Pressable style={styles.button}
              onPress={() => console.warn
              ('Button Pressed!')}>
              <Text style={styles.text} >Leçon de la semaine</Text>
            </Pressable>

          </View>
          
           
        </>
    );
} 
export default LessonPanel;

