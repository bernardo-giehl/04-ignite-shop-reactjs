import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';

export const ShopCartContainer = styled('div',{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'flex-start',
    justifyContent: 'center',
})

export const ShopCartClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,

  color: '$gray700',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',

  lineHeight: 2,
  background: 'transparent',

})

export const ShopCartModal = styled(Dialog.Content,{
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    
    backgroundColor: '$gray800',
    width: '100%',
    maxWidth: 480,
    padding: '4rem 4rem 4rem',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 1)',
})

export const ShopCartTitle = styled(Dialog.Title, {
    fontSize: '$lg',
    //lineHeight: 1.6,
    marginBottom: '3rem',
})

export const ShopCartButtom = styled('button',{
    backgroundColor: '$gray800',
    color: '$white',
    padding: '0.5rem',
    border: 'none',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: '0.2rem',

    svg: {
        color: '$gray500',
    },

    '&:disabled': {
        opacity: 0.6,
        cursor: 'default',
    },

    '&:not(:disabled):hover': {
        div: {
            backgroundColor: '$green300',   
        }
    },

    div: {
        display: 'flex',
        width: '1.5rem',
        height: '1.5rem',

        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        marginRight: '-2.5rem',
        marginTop: '-2.5rem',

        borderRadius: 999,
        backgroundColor: '$green500',
        outline: '3px solid $gray900',

        p: {
            fontSize: '$sm',
            color: '$white',
            textAlign: 'center',
        }
    }
})

export const ShopCartDetails = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

export const ShopCartTotals = styled('div',{
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        fontSize: '$md',

        '&:nth-child(2)': {
            fontWeight: 'bold',

            'span:nth-child(2)': {
                fontSize: '$xl',
            }
        }
    }
})

export const ShopCartButtonBuy = styled('button',{
    marginTop: '2rem',
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
})