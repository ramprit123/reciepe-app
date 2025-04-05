import { IdTokenClaims } from '@logto/rn';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  user: IdTokenClaims | null;
}

const Header: FC<Props> = ({ user }) => {
  return (
    <View style={styles.header}>
      <Image
        source={
          user?.picture
            ? { uri: user?.picture }
            : require('@/assets/images/profile.jpg')
        }
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
        }}
      />
      <Text className="text-2xl font-semibold text-slate-600">
        {user?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingTop: 60,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});

export default Header;
