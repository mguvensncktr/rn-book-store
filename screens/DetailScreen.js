import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import { COLORS, SIZES, FONTS, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const DetailScreen = ({ route, navigation }) => {

    const { book } = route.params;

    function renderBookInfoSection() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: book.backgroundColor }}>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: book.navTintColor }}>Book Detail</Text>
                    </View>
                    <TouchableOpacity
                        style={{ marginRight: SIZES.base }}
                        onPress={() => console.log("More pressed")}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: book.navTintColor,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5, paddingTop: SIZES.radius, alignItems: 'center' }}>
                    <Image
                        source={book.bookCover}
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            height: "auto",
                            width: 100
                        }}
                    />
                </View>
                <View style={{ flex: 1.8, justifyContent: 'center', alignItems: 'center', marginTop: SIZES.radius }}>
                    <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
                    <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 20,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: "rgba(0,0,0,0.3)"
                }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{book.rating}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Rating</Text>
                    </View>
                    <LineDivider />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{book.pageNo}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Number of Pages</Text>
                    </View>
                    <LineDivider />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{book.language}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Language</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: SIZES.radius, marginBottom: SIZES.radius }}>
                <ScrollView
                    contentContainerStyle={{ paddingLeft: SIZES.radius }}
                    scrollEventThrottle={16}
                    indicatorStyle="white"
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h2, marginBottom: SIZES.padding }}>Description</Text>
                    <Text style={{ color: COLORS.lightGray, ...FONTS.body3, marginBottom: SIZES.padding }}>{book.description}</Text>
                </ScrollView>
            </View >
        )
    }

    function renderBottomButton() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor: COLORS.secondary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius
                    }}
                    onPress={() => console.log("Bookmark pressed")}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary,
                        borderRadius: SIZES.radius,
                        marginHorizontal: SIZES.base,
                        marginVertical: SIZES.base
                    }}
                    onPress={() => console.log("Start Reading Pressed")}
                >
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Start Reading</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Book Cover */}
            <View style={{ flex: 4 }}>
                {renderBookInfoSection()}
            </View>

            {/* Description */}
            <View style={{ flex: 2 }}>
                {renderBookDescription()}
            </View>

            {/* Buttons */}
            <View style={{ height: 70, marginBottom: 30 }}>
                {renderBottomButton()}
            </View>
        </View>
    )
}

export default DetailScreen
