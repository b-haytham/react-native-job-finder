import React from 'react'
import { Layout as DefaultLayout, LayoutProps as DefaultLayoutProps } from '@ui-kitten/components'

import Constants from 'expo-constants'

interface LayoutProps extends DefaultLayoutProps{
    no_padding?:boolean
}

const Layout: React.FC<LayoutProps> = ({no_padding, children, ...rest}) =>{
    return (
        <DefaultLayout
            style={{flex: 1, paddingTop: no_padding ? 0 : Constants.statusBarHeight}}
            {...rest}
        >
            {children}
        </DefaultLayout>
    )
}


export default Layout