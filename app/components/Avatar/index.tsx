import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

interface Props {
  uri: string | undefined | (string | undefined)[];
  disableBorders?: boolean;
}

export default function Avatar({ uri, disableBorders }: Props) {
  if (Array.isArray(uri)) {
    return (
      <View style={styles.multipleContainer}>
        {uri.map((uri, index) => {
          if (index < 3) {
            return (
              <Image
                key={`image:${index}`}
                source={{ uri }}
                style={[
                  styles.multipleImages,
                  {
                    borderWidth: disableBorders ? 0 : 3,
                    left: index !== 0 ? index * -30 : 0,
                  },
                ]}
              />
            );
          }
          return null;
        })}
      </View>
    );
  }

  return (
    <>
      <Image source={{ uri }} style={styles.defaultImage} />
    </>
  );
}
