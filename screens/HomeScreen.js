import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LineDivider from '../components/LineDivider'
//constans
import { COLORS, icons, FONTS, SIZES, images } from '../constants'

const HomeScreen = ({ navigation }) => {

    const profileData = {
        name: "mguvensncktr",
        point: 240,
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Other Words For Home",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Adventure", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "The Metropolis",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = useState(profileData);
    const [myBooks, setMyBooks] = useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, paddingHorizontal: SIZES.padding, flexDirection: 'row', alignItems: 'center' }}>
                {/* User container */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Good Morning</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{profile.name}</Text>
                    </View>
                </View>
                {/* Point container */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'flex-end'
                    }}
                    onPress={() => console.log("Points pressed")}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: SIZES.base, paddingVertical: 5 }}>
                        <View style={{ width: 30, height: 30, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} point</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    function renderButtons() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => console.log("Claim Pressed")}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Image
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>Claim</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("GetPoint Pressed")}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>Get Point</Text>
                        </View>
                    </TouchableOpacity>

                    <LineDivider />

                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ color: COLORS.white, ...FONTS.body3, marginLeft: SIZES.base }}>My Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderMyBooks(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("Detail", { book: item })}
                >
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, color: COLORS.lightGray, ...FONTS.body3 }}>{item.lastRead}</Text>
                        <Image
                            source={icons.page_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray,
                                marginLeft: SIZES.radius
                            }}
                        />
                        <Text style={{ marginLeft: 5, color: COLORS.lightGray, ...FONTS.body3 }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>My Book</Text>
                    <TouchableOpacity
                        onPress={() => console.log("See more pressed")}
                    >
                        <Text style={{ color: COLORS.lightGray, textDecorationLine: "underline", ...FONTS.body3 }}>see more</Text>
                    </TouchableOpacity>
                </View>
                {/* Book List */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        data={myBooks}
                        renderItem={renderItem}
                    />
                </View>
            </View>


        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ color: COLORS.lightGray, ...FONTS.h3 }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("Detail", { book: item })}
                    >
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{
                                width: 100,
                                height: 150,
                                borderRadius: 10
                            }}
                        />
                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            <View>
                                <Text style={{ color: COLORS.white, ...FONTS.h2, paddingRight: SIZES.padding }}>{item.bookName}</Text>
                                <Text style={{ color: COLORS.lightGray, ...FONTS.h3 }}>{item.author}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ paddingHorizontal: SIZES.radius, ...FONTS.body4, color: COLORS.lightGray }}>{item.pageNo}</Text>
                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ paddingHorizontal: SIZES.radius, ...FONTS.body4, color: COLORS.lightGray }}>{item.readed}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={[styles.genreContainer, { backgroundColor: COLORS.darkGreen }]}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View
                                        style={[styles.genreContainer, { backgroundColor: COLORS.darkRed }]}
                                    >
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View
                                        style={[styles.genreContainer, { backgroundColor: COLORS.darkBlue }]}
                                    >
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log("Bookmark Pressed")}
                        style={{
                            marginRight: SIZES.radius,
                            marginTop: SIZES.base
                        }}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}

            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtons()}
            </View>

            {/* Body */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                <View>
                    {renderMyBooks(myBooks)}
                </View>
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    genreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingRight: SIZES.base,
        padding: SIZES.base / 2,
        height: 30
    }
})

export default HomeScreen
