import React from 'react';
 import {Text, View, TouchableOpacity} from 'react-native';
 import { styles } from '../styles/CommonStyles';

 export default function TimerItem(props){
     return (
     <View style={styles.container} key={String(props.timer.id)}>
         <Text style={styles.textItem}>
         {props.timer.id} - {props.timer.title}</Text>
         <Text style={styles.textItem}>
         timeLeft: {props.timer.timeLeft}</Text>
         <View style={styles.buttonsContainer}>
         <TouchableOpacity style={styles.deleteButton}
                             onPress={props.onDelete}>
             <Text style={styles.buttonText}>X</Text>
         </TouchableOpacity>
         </View>
     </View>
     );
 }