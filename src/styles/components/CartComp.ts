import { styled } from "..";

export const CartContainer = styled('div',{
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    justifyContent: 'center',
    marginBottom: '1rem',
})

export const CartImageContainer = styled('div', {
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

export const CartDetails = styled('div',{
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '$md',
    gap: '0.75rem',
    color: '$gray300',

    span: {
        fontSize: '$sm',
        fontWeight: 'bold',

        span: {
            fontSize: '$md',
            color: '$gray100',
        }
    },
})

export const CartButtons = styled('div',{
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    button: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: '0.375rem 0.375rem 0.25rem 0.375rem',
        color: '$green500',
        cursor: 'pointer',
        fontSize: '$rg',
        fontWeight: 'bold',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            color: '$green300',
            borderColor: '$green300',
        },

        '&:first-child': {
            border: '1px solid $green500',
            borderRadius: '8px 0px 0px 8px',
        },

        '&:nth-child(2)': {
            border: '1px solid $green500',
            borderRadius: '0px 8px 8px 0px',
        },

        '&:nth-child(3)': {
            border: 'none',
            marginLeft: '0.5rem',
        },
    },
        
})
