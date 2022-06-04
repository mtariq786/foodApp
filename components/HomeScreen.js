import * as React from 'react';
import {
     View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,FlatList,
    ScrollView ,
    TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import customColors from '../assets/colors/colors'

export default HomeScreen = ({navigation}) =>{

    const renderCategoryItem = ({item}) =>{

        return (

            <View style={[styles.categoyItemWrapper,{
                backgroundColor:item.selected ? customColors.primary : customColors.white,
                marginLeft:item.id == 1 ? 20 : 0
                
            }]}>
                <Image source={item.image} style={styles.categoryItemImage}></Image>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper,
                           {
                            backgroundColor: item.selected ? customColors.white : customColors.secondary
                           }
                  ]}>
                    <Feather name='chevron-right' size={8} color = {item.selected ? customColors.black : customColors.white}  style={styles.categorySelectIcon}></Feather>
                </View>
            </View>

        )
    }


    return (
       <View style={styles.container}>
           <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>

            <SafeAreaView>
                {/* Header wrapper */}
                <View style={styles.headerWrapper}>
                    {/* Profile Image */}
                    <Image source={require('../assets/images/profile1.jpg')} style={styles.profileImage}></Image>
                    
                    <Feather name='menu' size={24} color={customColors.textDark} ></Feather>
                    
                </View>
            </SafeAreaView>
            {/* Title Area */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.tiltesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search  */}
            <View style={styles.searchWrapper}>
            <Feather name='search' size={24} > </Feather>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
                
            </View>

            {/* Categories */}
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categriesListWrapper}>
                    <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    >

                    </FlatList>
                </View>
            </View>
            {/* Popular */}

            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>

                {/* Render Popular Data */}

                {popularData.map((item)=>(
                    <TouchableOpacity  key={item.id} onPress ={()=> navigation.navigate('Details',{
                        item:item
                    })}>
                    <View style={[styles.popularCardWrapper,{
                        marginTop:item.id == 1 ? 10 : 20
                        }]}
                        >
                        <View>
                            <View>
                                {/* Top week section */}
                                <View style={styles.popularTopTitleWrapper}>
                                    <MaterialCommunityIcons name='crown' size={16} color={customColors.primary}></MaterialCommunityIcons>
                                    <Text style={styles.popularTopTitle}>Top of the week</Text>
                                </View>

                                {/* Pizza title section */}
                                <View style={styles.popularPizzaTitleWrapper}>
                                    <Text style={styles.popularPizzaTitle} >{item.title}</Text>
                                    <Text style={styles.popularPizzaWeight}>Weight {item.weight}</Text>
                                </View>

                                {/* Button and rating section */}

                                <View style={styles.buttonRatingWrapper}>
                                    <View style={styles.addButtonWrapper}>

                                            <Feather name='plus' size={10}  color={customColors.textDark}></Feather>
                                    </View>

                                    <View >
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name='star' size={10} color={customColors.textDark}></MaterialCommunityIcons>
                                            <Text styles={styles.rating}> {item.rating}</Text>
                                        </View>
                                    </View>

                                </View>
                                
                            </View>
                        </View>
                             <View style={styles.rightCardWrapper}>
                                <Image source={item.image} style={styles.cardImage}></Image>
                            </View>
                       
                    </View>
                    </TouchableOpacity>
                ))}

            </View>
            </ScrollView>
       </View>
       
    );

}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerWrapper:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop:50,
        alignItems:'center',
        justifyContent:'space-between'
    },

    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
    },
    titlesWrapper:{
        marginTop:30,
        paddingHorizontal:20
    },
    tiltesSubtitle:{
        fontFamily:'Montserrat-Regular',
        fontSize:16,
        color:customColors.textDark
    },
    titlesTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:32,
        color:customColors.textDark,
        marginTop:5
    },
    searchWrapper:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    search:{
        flex:1,
        marginLeft:12,
        borderBottomColor:customColors.textDark,
        borderBottomWidth:2
    },
    searchText:{
        fontFamily:'Montserrat-SemiBold',
        marginBottom:5,
        fontSize:14,
        color:customColors.textLight
    },

    categoriesContainer:{
        marginTop:30,
    },
    categoriesTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        paddingHorizontal:20
    },
    categriesListWrapper:{
        marginTop:15,
        paddingBottom:20,
        shadowColor:customColors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:2
    },
    categoyItemWrapper:{
        marginRight:20,
        borderRadius:20,
    },
    categoryItemImage:{
        width:60,
        height:60,
        marginTop:24,
        alignSelf:'center',
        marginHorizontal:20
    

    },
    categoryItemTitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        textAlign:'center',
        marginTop:10

    },
    categorySelectWrapper:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        width:26,
        height:26,
        borderRadius:26
    },
    categorySelectIcon:{
        alignSelf:'center'
    },
    popularWrapper:{
        paddingHorizontal:20,
        shadowColor:customColors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation:2
    },
    popularTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:16
    },
    popularCardWrapper:{
        backgroundColor:customColors.white,
        borderRadius:10,
        paddingLeft:20,
        marginTop:20,
        flexDirection:'row',
        overflow:'hidden'
        
    },
    popularTopTitleWrapper:{
        marginTop:24,
        flexDirection:'row',
    },
    popularTopTitle:{
        fontFamily:'Montserrat-SemiBold',
        marginLeft:10
    },
    popularPizzaTitleWrapper:{
        marginTop:20

    },
    popularPizzaTitle:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
        color:customColors.textDark
    },
    popularPizzaWeight:{
        fontFamily:'Montserrat-Medium',
        fontSize:12,
        color:customColors.textLight
    },

    buttonRatingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:-20
    },
    addButtonWrapper:{
        backgroundColor:customColors.primary,
        borderTopEndRadius:25,
        borderBottomLeftRadius:25,
        paddingHorizontal:40,
        paddingVertical:20
    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    rating:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
        marginLeft:5
    },
    rightCardWrapper:{

        marginLeft:20
    },
    cardImage:{
        width:210,
        height:125,
        resizeMode:'contain'
    },
   
    
});
