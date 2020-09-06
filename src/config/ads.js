import React from 'react'
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
} from '@react-native-firebase/admob'

export const AdsBanner = () => (
  <BannerAd
    unitId="ca-app-pub-1026047672534143/9957665399"
    size={BannerAdSize.SMART_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
    onAdLoaded={() => {
      console.log('Advert loaded')
    }}
    onAdFailedToLoad={(error) => {
      console.error('Advert failed to load: ', error)
    }}
  />
)

export const interstitial = InterstitialAd.createForAdRequest(
  'ca-app-pub-1026047672534143/9574522013'
)
