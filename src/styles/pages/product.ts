
import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',  

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImagemContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$xxl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$xxl',
        color: '$green300'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    div: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        button: {
            backgroundColor: '$green500',
            border: 0,
            color: '$white',
            borderRadius: 8,
            padding: '1.25rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '$md',
    
            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed',
            },
    
            '&:not(:disabled):hover': {
                backgroundColor: '$green300',   
            }
        }
    },
    
})
