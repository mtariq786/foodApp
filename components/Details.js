import * as React from 'react';
import { View,Text,Image,SafeAreaView,StyleSheet,TouchableOpacity,FlatList } from "react-native"
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import customColors from '../assets/colors/colors';
import popularData from '../assets/data/popularData';
export default Details = ({route,navigation}) =>{
const {item} = route.params;


const renderIngredientsItem = ({item}) =>{

    return (

        <View style={[styles.ingredientsItemWrapper,{
            marginLeft:item.id == 1 ? 20 : 0
        }]}>
            <Image source={item.image} style={styles.ingredientsItemImage}></Image>
        </View>

    )
}



    return (

        <View style={styles.container}>
            <SafeAreaView>

                {/* Header Start */}
                <View style={styles.headerWrapper}>

                    <TouchableOpacity onPress={()=>navigation.goBack()}>

                
                        <View style={styles.headerLeft}>

                            <Feather name='chevron-left' size={12} color={customColors.textDark}></Feather>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name='star' size={12}></MaterialCommunityIcons>
                    </View>


                </View>
            </SafeAreaView>

                {/* Header Ends */}

                {/* Title & Price Start */}
                    <View style={styles.itemTitleWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>

                    <View style={styles.itemPriceWrapper}>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                {/* Tile & Price Ends */}

                {/* Start Pizza Details Section */}

                <View style={styles.infoWrapper}>
                    
                    <View style={styles.infoLeftSection}>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>Size</Text>
                            <Text style={styles.infoItemText}>{item.sizeName}</Text>
                        </View>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>Crust</Text>
                            <Text style={styles.infoItemText}>{item.crust}</Text>
                        </View>
                        <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery IN</Text>
                        <Text style={styles.infoItemText}>{item.deliverTime} min</Text>
                        </View>
                        
                        
                    </View>

                    <View style={styles.infoRightSection}>

                        <Image source={item.image} style={styles.infoImage}></Image>

                    </View>
                    

                </View>

                {/* Ingredients */}
            


                <View style={styles.ingredientsContainer}>
                    <Text style={styles.ingredientsHeading}>Ingredients</Text>
                    <View style={styles.ingredientsListWrapper}>
                        <FlatList
                        data={item.ingridents}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                        </FlatList>
                    </View>
                </View>

                {/* Place Order Button */}

                <TouchableOpacity onPress={()=>alert('Order has been placed successfully!')}>
                    <View style={styles.orderbuttonWrapper}>
                        <Text style={styles.orderText}>Place Order</Text>
                        <Feather name='chevron-right' size={18} color={customColors.black}></Feather>
                    </View>
                </TouchableOpacity>


          
        </View>
    )
}

    const styles = new StyleSheet.create({
    container:{
        flex:1,
       

    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:40
    },
    headerLeft:{
       
        borderRadius:10,
        borderWidth:2,
        borderColor:customColors.textLight,
        padding:12
    },
    headerRight:{
        backgroundColor:customColors.primary,
        borderRadius:10,
        borderWidth:2,
        borderColor:customColors.primary,
        padding:12
    },

    itemTitleWrapper:{
        paddingHorizontal:20,
        marginTop:30,
        
    },
    itemTitle:{
        color:customColors.textDark,
        fontFamily:'Montserrat-Bold', 
        fontSize:32,
        width:'60%'
    },
    itemPriceWrapper:{
        paddingHorizontal:20,
        marginTop:20
       
    },
    itemPrice:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:32,
        color:customColors.secondary
    },

    infoWrapper:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    infoLeftSection:{
        paddingLeft:20,
    },
    infoItemWrapper:{
        marginBottom:20
    },
    infoItemTitle:{
        color:customColors.textLight,
        fontFamily:'Montserrat-Medium',
        fontSize:14,
    },
    infoItemText:{
        color:customColors.textDark,
        fontFamily:'Montserrat-SemiBold',
        fontSize:16,

    },
    
    infoImage:{
        marginLeft:50,
        resizeMode:'contain'
    },

    ingredientsContainer:{
        paddingTop:40,

    },
    ingredientsHeading:{
        marginLeft:20,
        color:customColors.textDark,
        fontFamily:'Montserrat-Bold',
        fontSize:16
      
    },
    ingredientsListWrapper:{
        marginTop:20,

    },
    ingredientsItemWrapper:{
       backgroundColor:customColors.white,
       alignItems:'center',
       justifyContent:'center',
       paddingHorizontal:10,
       marginRight:15,
       borderRadius:15,
       
    },
    ingredientsItemImage:{
        resizeMode:'contain'
    },
    orderbuttonWrapper:{
      
        backgroundColor:customColors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginTop:60,
        marginHorizontal:20,
        marginVertical:20,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    orderText:{
        fontFamily:'Montserrat-Bold',
        fontSize:14,
        marginRight:10
    },
})
