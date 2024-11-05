import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { Item } from '../screens/Home';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SCREEN_WIDTH } from '../utils/constants';

export const ListItem = React.memo(({ item, navigation }: {item: Item, navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>}) =>{
  const [listFavorite, setListFavorite] = useState<number[]>([]);

  return (
    
    <View style={[styles.padding16, {gap: 8, backgroundColor: 'white'}]}>

      <View style={styles.postItem}>
        <Image source={{ uri: item.image }} style={styles.avatarUserPost} />
        <Text>{item.name}</Text>
      </View>
      <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 24}}>Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng châu thổ sông Hồng ở miền Bắc Việt Nam.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
        <Image source={{ uri: item.image }} style={{borderRadius: 12, height: 418}} resizeMode='cover'/>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row',alignItems: 'center', gap: 4, paddingVertical: 8, paddingHorizontal:12}}>
            <TouchableOpacity onPress={()=>{
              if(listFavorite.includes(item.id)){
                setListFavorite(listFavorite.filter(id => id !== item.id));
              }else{
                setListFavorite([...listFavorite, item.id]);
              }
            }}><Image source={require('../assets/heart.png')} style={[styles.iconSize, {tintColor: listFavorite.includes(item.id) ? 'red' : undefined}]}/></TouchableOpacity>
            <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>11k</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center', gap: 4, paddingVertical: 8, paddingHorizontal:12}}>
            <Image source={require('../assets/message-square-typing.png')} style={styles.iconSize}/>
            <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>55k</Text>
        </View>
      </View>
      <View style={{borderTopColor: '#F3F4F6', borderTopWidth: 1, paddingTop: 8, flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <Image source={{ uri: item.image }} style={styles.avatarUserPost} />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <TextInput placeholder='Nhập bình luận' style={{backgroundColor:'#F9FAFB', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12, width: SCREEN_WIDTH - 180}} />
            <TouchableOpacity style={{padding: 8, borderRadius: 999, backgroundColor: '#F3F4F6'}}>
                <Image source={require('../assets/sentiment_satisfied_alt.png')} style={styles.iconSize}/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 8, borderRadius: 999, backgroundColor: '#F3F4F6'}}>
                <Image source={require('../assets/image-03.png')} style={styles.iconSize}/>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )});