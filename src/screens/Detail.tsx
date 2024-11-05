import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { styles } from '../../styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail = ({navigation, route}: Props) => {
  const item = route.params.item;
  return (
    <SafeAreaView style={[styles.bgApp, {flex: 1}]}>
      {/* header */}
      <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16, gap: 8, marginBottom: 8, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/chevron-left.png')} style={styles.iconHeader} />
        </TouchableOpacity>
        <Image source={{uri: item.image}} style={{width: 32, height: 32, borderRadius: 999}} />
        <Text>{item.name}</Text>
      </View>
      {/* content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: 12, paddingHorizontal: 16, gap: 8, backgroundColor: 'white', marginBottom: 8}}>
          <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 24}}>Dân ca Quan họ là một trong những làn điệu dân ca tiêu biểu của vùng châu thổ sông Hồng ở miền Bắc Việt Nam.</Text>
          <Image source={{ uri: item.image }} style={{borderRadius: 12, height: 418}} resizeMode='cover'/>
          <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 16, color: '#71717A'}}>55K lượt xem</Text>
          <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 16, color: '#71717A'}}>11k thích • 6 bình luận • 2 chia sẻ</Text>
          <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
            <View style={{flexDirection: 'row',alignItems: 'center', gap: 4, paddingVertical: 8, paddingHorizontal:12}}>
                <Image source={require('../assets/heart.png')} style={{width: 20, height: 20}}/>
                <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>11k</Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center', gap: 4, paddingVertical: 8, paddingHorizontal:12}}>
                <Image source={require('../assets/message-square-typing.png')} style={{width: 20, height: 20}}/>
                <Text style={{fontWeight: '400', fontSize: 14, lineHeight: 20}}>55k</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{borderTopColor: 'white', borderTopWidth: 1, paddingHorizontal: 16, paddingTop: 16, paddingBottom: 54, flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'white'}}>
        <Image source={{ uri: item.image }} style={{width: 32, height: 32, borderRadius: 999}} />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <TextInput placeholder='Nhập bình luận' style={{backgroundColor:'#F9FAFB', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12, width: Dimensions.get('screen').width - 164}} />
            <TouchableOpacity style={{padding: 8, borderRadius: 999, backgroundColor: '#F3F4F6'}}>
                <Image source={require('../assets/sentiment_satisfied_alt.png')} style={styles.iconSize}/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 8, borderRadius: 999, backgroundColor: '#F3F4F6'}}>
                <Image source={require('../assets/image-03.png')} style={styles.iconSize}/>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail;