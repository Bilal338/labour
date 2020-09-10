import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';

const {width} = Dimensions.get("window");

const truncateName = (name)=>{
  if(name.length > 10){
    return name.slice(0, 10) + "..."
  }
  else return name;
}

const Home = ({navigation})=>{
  const [electricians, setElectrcians] = useState();
  useEffect(()=>{
    setElectrcians([
      {
        uid:"1",
        name: "Asghar Ali",
        rating: 4.0,
        phone: "03001234567"
      },
      {
        uid:"2",
        name: "Asghar Ali",
        rating: 4.4,
        phone: "03001234567"
      },
      {
        uid:"3",
        name: "Asghar Ali",
        rating: 3.5,
        phone: "03001234567"
      },
      {
        uid:"4",
        name: "Asghar Ali sjfdjjd",
        rating: 4.2,
        phone: "03001234567"
      }
    ])
  },[])
  return(
    <View style={styles.container}>
      <View style={{alignItems:"center", flex:1}} >
        <Text style={styles.heading} >Electricians</Text>
        <TextInput style={styles.searchField}  placeholder="Enter Your Area or Nearby" />
      </View>
      <View style={{flex:4}} >
        <FlatList
          data={electricians}
          ListHeaderComponent={()=>(
            <View style={{flexDirection:"row", justifyContent:"space-between", paddingBottom:5}} >
              <View style={{alignItems:"center", flex:1}} >
                <Text style={{fontSize:20}} >Name</Text>
              </View>
              <View style={{alignItems:"center", flex:1}}  >
                <Text style={{fontSize:20}} >Rating</Text>
              </View>
              <View style={{alignItems:"center", flex:1}}  >
                <Text style={{fontSize:20}} >Number</Text>
              </View>
            </View>
          )}
          renderItem={({item})=>(
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:width}} >
              <View style={{flex:1, alignItems:"center"}} >
                <Text>{truncateName(item.name)}</Text>
              </View>
              <View style={{flex:1, flexDirection:"row",alignItems:"center", justifyContent:"space-evenly"}} >
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={item.rating}
                  fullStarColor="#fadf00"
                  halfStarColor="#fadf00"
                  emptyStarColor="#fadf00"
                  starSize={15}
                />
                <Text>{`${item.rating}/5`}</Text>
              </View>
              <View style={{flex:1, alignItems:"center"}} >
                <Text>{item.phone}</Text>
              </View>
            </View>
          )}
          keyExtractor={item=>item.uid}
        />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:'center', 
    justifyContent:'flex-start', 
    backgroundColor:"white",
    paddingTop:10
  },
  heading:{
    fontSize:25,
    color:"#79804f"
  },
  searchField:{
    borderBottomWidth:1,
    textAlignVertical:"bottom"
  }
})