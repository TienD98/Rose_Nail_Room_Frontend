import { createBoard } from '@wixc3/react-board';
import { Landing } from '../../../components/landing/landing';

export default createBoard({
    name: 'Landing',
    Board: () => <Landing />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 1,
            bottom: 0,
            left: 0,
            right: 0,
        },
        windowWidth: 430,
        windowHeight: 932,
    },
});
