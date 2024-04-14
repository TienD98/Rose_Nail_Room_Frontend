import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        windowWidth: 430,
        windowHeight: 932,
    },
});
