import {Dimensions, StatusBar} from 'react-native'; 

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const NAV_BAR_HEIGHT = SCREEN_HEIGHT-WINDOW_HEIGHT-STATUS_BAR_HEIGHT;