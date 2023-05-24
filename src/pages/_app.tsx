import Seo from '@/components/seo'
import '@/styles/globals.css'
import { Container } from '@mui/material'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// import type { AppProps } from 'next/app'
import {store} from "../../public/store"
export default function App({ Component, pageProps }: AppProps) {
  return <><Provider store={store}><Container><Seo pageTitle={"Comment"}/><Component {...pageProps} /></Container></Provider></>
}
