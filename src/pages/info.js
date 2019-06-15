import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';


export default class Info extends Component{

    componentDidMount(){

    }
    constructor(props){
        super(props)
    }
    
    render(){
        const movie = this.props.navigation.state.params.item;
        console.log(movie);
        return(
            <View style={styles.container}>

                <Text style = {styles.title}>Episódio {movie.episode_id} - {movie.title}</Text>
                <Text style = {styles.info}><Text style={styles.subtitle}>Diretor</Text>: {movie.director}</Text>
                <Text style = {styles.info}><Text style={styles.subtitle}>Abertura</Text>: {movie.opening_crawl}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fafafa",
        flex:1,
        padding:20
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:"#333",

    },
    subtitle:{
        fontSize:16,
        color:"#333"
    },
    info:{
        lineHeight:24
    }    

})
