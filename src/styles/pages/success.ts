import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        marginTop: '2rem',
        fontSize: '$xxl',
        color: '$gray100',
    },

    p:{
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',

        marginTop: '2rem',
    },

    a:{
        display: "block",
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
            color: '$green500',  
        }
    }
})

export const CarouselContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 130,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 999,
    padding: '0.5rem',
    marginTop: '4rem',
    boxShadow: '0px 0px 30px 15px rgba(0, 0, 0, 0.3)',

    '&:not(:first-of-type)': {
        marginLeft: '-3rem',
    },


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }

})