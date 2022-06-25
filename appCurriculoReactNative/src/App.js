import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const App = ()=>{
    return ( 
        <SafeAreaView style={style.container}> 
            <View>
                <StatusBar backgroundColor={'pink'} barStyle='white-content'/>
                <Text style={style.Text}>
                    Hello, Jorld.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default App;
const style = StyleSheet.create({
    container:{ // estilo da nossa view
        backgroundColor: 'pink',
        flex: 1, //expande para a tela por completo
    },
    Text:{ // estilo do nosso texto
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
    }
});