import { View, StyleSheet } from 'react-native';

export default function Pontos({ numero, tamanho = 50, borda = false, cor = '#000' }) {
  const getLayout = () => {
    switch (numero) {
      case 1:
        return [[null, 'dot', null]];
      case 2:
        return [['dot', null, null], [null, null, 'dot']];
      case 3:
        return [['dot', null, null], [null, 'dot', null], [null, null, 'dot']];
      case 4:
        return [['dot', null, 'dot'], [null, null, null], ['dot', null, 'dot']];
      case 5:
        return [['dot', null, 'dot'], [null, 'dot', null], ['dot', null, 'dot']];
      case 6:
        return [['dot', null, 'dot'], ['dot', null, 'dot'], ['dot', null, 'dot']];
      default:
        return [];
    }
  };

  const layout = getLayout();
  const dotSize = tamanho / 7;

  return (
    <View
      style={[
        styles.container,
        { width: tamanho, height: tamanho },
        borda ? styles.comBorda : styles.semBorda,
      ]}
    >
      {layout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              {cell === 'dot' && (
                <View
                  style={[
                    styles.dot,
                    { width: dotSize, height: dotSize, borderRadius: dotSize / 2, backgroundColor: cor },
                  ]}
                />
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  comBorda: {
    borderWidth: 2,
    borderColor: '#000',
  },
  semBorda: {
    borderWidth: 0,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    // cor da bolinha agora é dinâmica
  },
});
