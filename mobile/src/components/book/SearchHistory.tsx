import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HistoryProps {
  history: string[];
  onPressItem: (item: string) => void;
  onDeleteItem: (index: number) => void;
  onClearAll: () => void;
}

export default function SearchHistory({ history, onPressItem, onDeleteItem, onClearAll }: HistoryProps) {
  if (history.length === 0) {
    return <Text style={styles.emptyText}>최근 검색 기록이 없습니다.</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>최근 검색어</Text>
        <TouchableOpacity onPress={onClearAll}>
          <Text style={styles.clearAll}>전체 삭제</Text>
        </TouchableOpacity>
      </View>

      {history.map((item, index) => (
        <View key={index} style={styles.historyItem}>
          <TouchableOpacity 
            style={{ flex: 1 }} 
            onPress={() => onPressItem(item)}
          >
            <Text style={styles.historyText}>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDeleteItem(index)}>
            <Icon name="close" size={18} color="#B8B8B8" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: -5 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' },
  title: { fontSize: 21, fontWeight: 'bold', color: '#333' },
  clearAll: { fontSize: 12, color: '#888' },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  historyText: { fontSize: 15, color: '#555', marginLeft: 10 },
  emptyText: { textAlign: 'center', color: '#B8B8B8', marginTop: 30 },
});

