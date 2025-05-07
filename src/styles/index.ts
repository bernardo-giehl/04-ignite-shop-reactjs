import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            
            gray900: '#121212',
            gray800: '#202020',
            gray700: '#8D8D8D',
            gray300: '#c4c4c4',
            gray100: '#e1e1e1',
      
            green500: '#00875f',
            green300: '#00b37e',

            purple300: '#958cd4',
            purple500:'#7465d4',
        },  

        fontSizes: {
            sm: '0.875rem',
            rg: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            xxl: '2rem',
        }
    }
})