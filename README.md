# react-native-gustavino-dominino

Componente visual simples e elegante que exibe pontos (semelhantes aos de um dado) de 1 a 6, totalmente customizável. Ideal para aplicações que exigem representação gráfica de valores numéricos em formato de pontos, como jogos, rolagem de dados e elementos visuais interativos.

---

## ✨ Features

- Exibe padrões de pontos de 1 a 6 como em um dado tradicional
- Personalização de tamanho, cor e borda
- 100% em React Native (sem dependências externas)
- Leve, reutilizável e de fácil integração

---

## 📦 Instalação

```bash
npm install react-native-gustavino-dominino
```
## ou
```bash
yarn add react-native-gustavino-dominino
```

## 🚀 Uso

Para utilizar o componente `Pontos`, basta importá-lo e utilizá-lo com as props desejadas:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Pontos } from 'react-native-gustavino-dominino';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pontos numero={5} tamanho={100} borda={true} cor="#FF0000" />
    </View>
  );
}
```

## 🔧 Props disponíveis

| Propriedade | Tipo     | Padrão   | Obrigatório | Descrição                                                                 |
|-------------|----------|----------|-------------|---------------------------------------------------------------------------|
| `numero`    | `number` | -        | Sim         | Número entre 1 e 6 que define o padrão das bolinhas.                      |
| `tamanho`   | `number` | `50`     | Não         | Tamanho total do componente (largura e altura).                           |
| `borda`     | `boolean`| `false`  | Não         | Exibe uma borda preta ao redor do componente.                             |
| `cor`       | `string` | `'#000'` | Não         | Cor das bolinhas (aceita qualquer valor de cor válido em CSS, como `#HEX`, `rgb`, etc). |

## 🎯 Exemplo com diferentes configurações

```jsx
<Pontos numero={2} />
```
```jsx
<Pontos numero={4} tamanho={80} />
```
```jsx
<Pontos numero={6} tamanho={100} cor="red" borda={true} />
```

## 🧠 Sobre

Este componente foi criado por **Estevão Santos** com o objetivo de ser simples, visualmente agradável e reutilizável em projetos React Native.

Ele simula o visual de **dados** e **peças de dominó** utilizando apenas `View`, `StyleSheet`.

Ideal para jogos, apps educacionais, componentes decorativos ou qualquer interface que queira usar pontos.

Sinta-se à vontade para contribuir, abrir issues ou sugerir melhorias! 🚀
