import { Text, View, StyleSheet, ScrollView, Button, Pressable} from "react-native";
import { useFonts } from 'expo-font';
import {Link} from 'expo-router'


export default function RecipeGeneration() {


  
  const testList = [{recipe_Name:'bacon egg and cheese', ingredients: "testing ingredients \ningredients 1 \ningredients 2 \ningredients 3", directions: ["dir test 1", "dir test 2"]}];

  return (
    <View style = {style.pageTemp}>
      <View style = {style.topHeader}>
        <Text numberOfLines={2} style = {style.titleStyle}> Recipe{"\n"}Generation</Text>
      </View>

        <Pressable style={style.buttonStyle} onPress={() => console.log("for backend")}>
          <Text style={style.buttonText}> Click to Generate! </Text>
        </Pressable>
      <View style = {style.listStyle}>
      {
        testList.map((item,i)=>
        {
          //finish onClick
         return <Link asChild href={{ 
          pathname: './RecipePage',
          params: {recipe_Name:item.recipe_Name, ingredients:item.ingredients, directions:item.directions},
         }}>
         <Pressable style = {style.recipeList} key={i}> 
          <Text style = {style.recipeTitle}>{item.recipe_Name} </Text>
          <Text style = {style.recipeIngredients}>{item.ingredients}</Text>
          <Text style = {style.firstDirection}>{item.directions}</Text>
          </Pressable>
          </Link>
        })
}
      </View>
    </View>
  );
}

const style = StyleSheet.create(
  {
    pageTemp: 
    {
      backgroundColor: "#FFFFFF",
      flex:1
    },
    topHeader:
    {
      flex:1,
      height: 200,
      backgroundColor: '#5db075',
      alignItems : 'center',
      justifyContent: 'center',
      marginBottom: "10%"
    },
    titleStyle:
    {
      fontSize: 36,
      fontWeight: '400',
      fontFamily: 'SourceSerifPro'

    },
    buttonStyle:
    {
      flex : 1,
      width: '80%',
      height: '5%',
      backgroundColor: '#3a405a',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      position: 'absolute',
      top: '21%'
      
    },
    buttonText:
    {
      flex : 0,
      color: '#FFFFFF',
    },
    listStyle:
    {
      flex: 3,
      alignItems: 'center'
    },
    recipeList:
    {
      flex: 0,
      backgroundColor : '#e9e9e9',
      width : "80%",
      marginBottom: 20,
      paddingLeft:10,
      borderRadius: 10,
    },
    recipeTitle:
    {
      fontSize: 20,
      margin: 3
    },
    recipeIngredients:
    {
      fontSize: 15,
      margin: 1
    },
    firstDirection:
    {
      fontSize: 15,
      margin: 3
    }
  }
)