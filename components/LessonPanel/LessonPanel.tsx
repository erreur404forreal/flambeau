import styles from './styles';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';
import { RootTabScreenProps } from '../../types';

const LessonPanel = () => {
    return (
        <>
          <View style={styles.panelContainer}>
            <Text style={styles.title} >Etudier la lesson</Text>
          </View>
          
           
        </>
    );
} 
export default LessonPanel;

