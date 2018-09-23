import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Header, Actions, Info } from "../components/UserDetails";
import { PrimaryButton } from "../components/Buttons";
import colors from "../config/colors";
import { me } from "../config/data";

export default class Me extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...me} />
        <PrimaryButton label="Edit Profile" onPress={() => null} />
        <Actions {...me} />
        <Info {...me} />
      </ScrollView>
    );
  }
}
