import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { styles } from '../../styles';
import { ListItem } from '../components/ListItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { NAV_BAR_HEIGHT } from '../utils/constants';



export interface Item {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

const icons = [
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
  require('../assets/camera-01-filled.png'),
];

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;



function Home({navigation}: Props): React.JSX.Element {

  const categories = useMemo(() => ['Thảo luận', 'Đang chú ý', 'Thành viên', 'Sự kiện', 'Ảnh'], []);

  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState(categories[0]);


  const fetchData = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&limit=10`);
      const json = await res.json();
      setData(prevData => [...prevData, ...json.results]);
      setHasMore(json.info.next !== null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);


  useEffect(() => {
    fetchData();
  }, [page]);

  const handleLoadMore = useCallback(() => {
    if (hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
    }
  },[hasMore, loading]);

  const renderCategoryItem = useCallback(
    ({ item }: { item: string }) => (
      <TouchableOpacity style={styles.category} onPress={() => setCategory(item)}>
        <Text
          style={[
            styles.nameCatequery,
            {
              backgroundColor: category === item ? '#3864FF' : 'transparent',
              color: category === item ? '#FFFFFF' : '#4D5761',
            },
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ),
    [category]
  );

  const renderListItem = useCallback(
    ({ item }: { item: Item }) => <ListItem item={item} navigation={navigation} />,
    [navigation]
  );

  return (
    <SafeAreaView style={[styles.bgApp, {flex: 1}]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.bgApp.backgroundColor}
      />
      {/* Header */}
      <View style={styles.containerHeader}>
          <Image style={styles.iconHeader} source={require('../assets/chevron-left.png')} />
          <Text style={styles.title} numberOfLines={2}>UI/UX Graphic Designers in Vietnam</Text>
          <Image style={styles.iconHeader} source={require('../assets/search.png')} />
        </View>
      <View>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        stickyHeaderIndices={[3]}
        style={[styles.bgApp]} 
        scrollEventThrottle={16}    
        onScroll={(event)=>{
          const {contentOffset,contentSize,layoutMeasurement} = event.nativeEvent;
            const isEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;
            if(isEnd){
              handleLoadMore();
            }
          }}
        >
          <View style={styles.banner}>
            <TouchableOpacity style={{padding: 8, borderRadius: 999, 
              backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)',  shadowOpacity: 0.5, shadowOffset: {width: 0, height: 1}, shadowRadius: 4,elevation: 5}}>
            <Image style={styles.iconSize} source={require('../assets/camera_alt.png')} />
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 12, paddingHorizontal: 16, backgroundColor: 'white', marginBottom: 8, gap: 12}}>
            <Text style={styles.infoTitle}>UI/UX Graphic Designers in Vietnam</Text>
            <View style={[styles.row, {gap: 8}]}>
              <Image style={styles.iconSize} source={require('../assets/lock-02.png')} />
              <Text style={{fontSize: 14, fontWeight: '400', lineHeight: 20}}>Nhóm riêng tư· 36,9k thành viên</Text>
            </View>
            <View style={[styles.row, styles.gap8]}>
                  <TouchableOpacity style={[styles.manageButton, styles.gap8]}>
                    <Image style={styles.iconSize} source={require('../assets/shield-check-filled.png')}/>
                    <Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, color: '#FFFFFF'}}>Quản lý</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.inviteButton, styles.gap8]}>
                    <Image style={styles.iconSize} source={require('../assets/user-profile-add-02-filled.png')}/>
                    <Text style={{fontWeight: '600', fontSize: 14, lineHeight: 20, color: '#4D5761'}  }>Mời</Text>
                  </TouchableOpacity>
                </View>
          </View>
          <View style={styles.inputSection}>
            <View style={[styles.row, {gap: 12}]}>
              <Image style={styles.avatar} source={require('../assets/image.png')} />
              <TextInput style={styles.title} placeholder="Hãy viết gì đó cho hôm nay" placeholderTextColor={'#D2D6DB'}/>
            </View>
            <View style={[styles.inputSectionOption, {paddingVertical: 8}]}>
              {icons.map((item, index) => (
                <Image key={index} style={{width: 20, height: 20}} source={item} />
              ))}
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item}
              style={[styles.categoryContainer]}
              contentContainerStyle={styles.contentCategory}
              renderItem={renderCategoryItem}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderListItem}
            scrollEnabled={false}
            onEndReachedThreshold={0.5}
            style={{marginBottom: NAV_BAR_HEIGHT}}
            contentContainerStyle={[styles.gap8]}
            ListFooterComponent={() => loading && <ActivityIndicator size="large" color="#3864FF" />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
