import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';

import api from '../services/api';

export default class Main extends Component{
    static navigationOptions = {
        title: "Hunt", 
    };
    state = {
        counter:0,
        films:[],
    }
    componentDidMount(){
        this.loadUsers();
    }
    loadUsers = async () => {
        let res = "";
        const response = await api.get('films/');
        const films = response.data.results;
        this.setState({
            counter:response.data.count,
            films: response.data.results
        })
    };
    renderItem = ({item}) =>(
        <TouchableOpacity style = {styles.movieContainer}>
            <Text style = {styles.titleFilm}>{item.title}</Text>
            <Text style = {styles.directorFilm} >{item.director}</Text>
            
            
        </TouchableOpacity>
    );
    render(){
        return(
            <View style={styles.container}>
                
                <FlatList 
                    contentContainerStyle = {styles.list}
                    data={this.state.films} 
                    keyExtractor={item => ""+item.episode_id}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fafafa",
        flex:1,
    },
    list:{
        padding:20,
        backgroundColor:"#fafafa",
    },
    movieContainer:{
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor:"#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    titleFilm:{
        fontSize:20
    }
});