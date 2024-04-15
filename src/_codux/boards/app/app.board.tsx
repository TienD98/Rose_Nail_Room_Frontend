import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 430,
        windowHeight: 763,
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 41.81046676096181,
            left: 0,
        },
        canvasPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    isSnippet: false,
});
