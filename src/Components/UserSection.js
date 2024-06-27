import React from "react";
import { View, Text,Image, TextInput } from "react-native";
import { userStyles } from "../Styles/User";
import DownArrow from "react-native-vector-icons/Feather";
import UserIcon from 'react-native-vector-icons/Feather';
import SearchIcon from "react-native-vector-icons/FontAwesome"; 

const UserSection = () => {
    return (
      <View style={userStyles.topWrapper}>
        <View style={userStyles.top}>
          <View>
            <Image
              source={require("../Img/h1.jpeg")}
              style={userStyles.profilePic}
            />
          </View>

          <View style={userStyles.rightSide}>
            <Text style={userStyles.text1}>Deriver Now</Text>
            <Text style={userStyles.text2}>
              Current Location
              <DownArrow
                name="chevron-down"
                style={userStyles.downArrow}
              />
            </Text>
          </View>
          <UserIcon
            name="user"
            style={userStyles.userIcon}
          />
        </View>

        <View style={userStyles.inputSection}>
          <View style={userStyles.inputBox}>
            <SearchIcon name="search" />
            <TextInput
              placeholder="Pick Restaurant"
              keyboardType="default"
              style={userStyles.input}
            />
          </View>
        </View>
      </View>
    );
};

export default UserSection;
