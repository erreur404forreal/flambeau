import styles from './styles';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import LessonPanel from '../../components/LessonPanel';

export default function DailyLessonScreen() {

  fetch('https://dl.sdarm.org/library/content/J_/sbl/fr/2022/1/10')
    .then((response) => response.text())
    .then((textResponse) => console.log('response is ', textResponse))
    .catch((error) => {
        console.log(error);
    });

  return (
    <View>
      
    </View>
  );
}

