import React from "react";
import { View } from "react-native";

import styles from "./styles";
import Row from "./Row";
import { toPhoneNumber } from "../../helpers/string";

const Actions = ({ email, cell, phone }) => {
  return (
    <View style={styles.actionContainer}>
      <Row
        label="email"
        body={email}
        actions={[
          {
            onPress: () => null,
            iosIcon: "ios-mail",
            androidIcon: "md-mail"
          }
        ]}
      />
      <Row
        label="cell"
        body={toPhoneNumber(cell)}
        actions={[
          {
            onPress: () => null,
            iosIcon: "ios-call",
            androidIcon: "md-call"
          },
          {
            onPress: () => null,
            iosIcon: "ios-text",
            androidIcon: "md-text"
          }
        ]}
      />
      <Row
        label="phone"
        body={toPhoneNumber(phone)}
        actions={[
          {
            onPress: () => null,
            iosIcon: "ios-call",
            androidIcon: "md-call"
          }
        ]}
      />
    </View>
  );
};

export default Actions;
