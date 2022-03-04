import styles from './styles';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import LessonPanel from '../../components/LessonPanel';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

// npm i react-xml-parser

export default function DailyLessonScreen() {

  const [data, setData] = useState<string>(); 
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://dl.sdarm.org/library/content/X_/sbl/fr/2022/1/10");
    const data = await resp.text();
    setData(data);
    setLoading(false);
    console.log(data);
  };

  fetchData();

  // var XMLParser = require('react-xml-parser');
  // var xml = new XMLParser().parseFromString(xmlString);    // Assume xmlText contains the example XML
  // console.log(xml);
  // console.log(xml.getElementsByTagName('Name'));


  return (
    <SafeAreaView style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView style={styles.scrollView}>
        <Text>
          {data}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}


