import { styled } from "..";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export const ScrollAreaRoot = styled(ScrollArea.Root, {
    height: 'calc(100vh - 370px) !important',
	borderRadius: '4px',
	overflow: 'hidden',
	'--scrollbar-size': '10px',
})

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
	width: '100%',
	height: '100%',
	borderRadius: 'inherit',
})

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
	display: 'flex',
	/* ensures no selection */
	userSelect: 'none',
	/* disable browser handling of all panning and zooming gestures on touch devices */
	touchAction: 'none',
	padding: '2px',
	transition: 'background 160ms ease-out',

    '&[data-orientation="vertical"]': {
	    width: 'var(--scrollbar-size)',
    },

    '&[data-orientation="horizontal"]': {
	    flexDirection: 'column',
	    height: 'var(--scrollbar-size)',
    },
})

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
	flex: '1',
	background: '$gray700',
	borderRadius: 'var(--scrollbar-size)',
	position: 'relative',

    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    '&::before': {
        content: '',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: '44px',
        minHeight: '44px',
    }
})

export const ScrollAreaCorner = styled(ScrollArea.Corner, {
	background: '$gray700',
})
