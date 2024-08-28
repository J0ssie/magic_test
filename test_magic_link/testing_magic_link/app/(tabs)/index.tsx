import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Magic } from 'magic-sdk';
import { useState } from 'react';

// Construct with an API key:

export default function HomeScreen() {

  const magic = new Magic('pk_live_38D3E7F343F374BE')

  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

  try {

    // Initiate login flow
  
    const handle = magic.auth.loginWithEmailOTP({ email: "jossie@tennet.id", showUI: false, deviceCheckUI: false });
  
  
    handle
  
    .on('email-otp-sent', () => {
  
      // The email has been sent to the user
  
  
      // Prompt the user for the OTP
  
      const otp = window.prompt('Enter Email OTP');
  
      // Send the OTP for verification
      if(otp !== null) {
        handle.emit('verify-email-otp', otp);
      }
    })
  
    .on('invalid-email-otp', () => {
  
      // User entered invalid OTP
  
  
      /* 
  
        Have the user retry entering the OTP.
  
        Then emit the "verify-email-otp" event with the OTP.
  
      */
  
  
      /*
  
        You may limit the amount of retries and
  
        emit a "cancel" event to cancel the login request.
  
      */
  
  
      // cancel login request
  
      handle.emit('cancel');
  
    })
  
    .on('done', (result) => {
  
      // is called when the Promise resolves
  
  
      // convey login success to user
      console.log(result)
      alert('Login complete!');
      setLoggedIn(true)
      
  
      // DID Token returned in result
  
      const didToken = result;
  
    })
  
    .on('error', (reason) => {
  
      // is called if the Promise rejects
  
      console.error(reason);
  
    })
  
    .on('settled', () => {
  
      // is called when the Promise either resolves or rejects
  
    }) 
  
  
    /**
  
     * Device Verification Events
  
     */
  
    .on('device-needs-approval', () => {
  
      // is called when device is not recognized and requires approval
  
    })
  
    .on('device-verification-email-sent', () => {
  
      // is called when the device verification email is sent 
  
    })
  
    .on('device-approved', () => {
  
      // is called when the device has been approved
  
    })
  
    .on('device-verification-link-expired', () => {
  
      // is called when the device verification link is expired
  
      // Retry device verification
  
      handle.emit('device-retry');
  
    });
  
  
    /*
  
       In typescript, you may use DeviceVerificationEventOnReceived types for strong typing
  
    */ 
  
    /* 
  
       You may use 'cancel' from white-label otp event 
  
       to terminate the unresolved request
  
    */
  
  } catch (err) {
  
    // handle errors
  
  }

  if(isLoggedIn) {
    return (
      <div>
        Welcome to BangBus
      </div>
    )
  }

  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
