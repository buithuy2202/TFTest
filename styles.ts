import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bgApp: { backgroundColor: '#F9FAFB' },
    containerHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white' },
    iconHeader: { width: 24, height: 24 },
    iconSize: { width: 20, height: 20 },
    title: { fontSize: 16, fontWeight: '600', lineHeight: 24 },
    bgItem: {
        backgroundColor: 'white',
    },
    banner: { height: 200, width: '100%', backgroundColor: '#F9FAFB', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 },
    info: {paddingVertical: 12, paddingHorizontal: 16, marginBottom: 8, backgroundColor: 'white' },
    infoTitle: { fontSize: 20, fontWeight: '600', lineHeight: 30 },
    row: { flexDirection: 'row',alignItems: 'center'},
    manageButton: {flexDirection: 'row',flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3864FF', paddingVertical: 8,paddingHorizontal: 14, borderRadius: 8},
    inviteButton: {flexDirection: 'row',flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6', paddingVertical: 10,paddingHorizontal: 14, borderRadius: 8},
    inputSection: { paddingVertical: 12, paddingHorizontal: 16, marginBottom: 8, backgroundColor: 'white' },
    avatar: { width: 44, height: 44, borderRadius: 22 },
    inputSectionOption:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    gap8: { gap: 8 },
    categoryContainer: { backgroundColor: 'white', marginBottom: 8 },
    contentCategory: { gap: 12, padding: 16 },
    category: { backgroundColor: '#F3F4F6', borderRadius: 999, },
    nameCatequery:{ padding: 10, backgroundColor: '#F3F4F6', borderRadius: 999 },
    padding16: { padding: 16 },
    postItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    avatarUserPost: { width: 40, height: 40, borderRadius: 999 },
});
