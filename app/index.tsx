import { IdTokenClaims, useLogto } from '@logto/rn';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const [user, setUser] = useState<IdTokenClaims | null>(null);
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((claims) => {
        setUser(claims);
      });
    }
  }, [isAuthenticated]);
  return isAuthenticated ? null : <Redirect href="/landing" />;
};

export default Index;
