import { createBoard } from '@wixc3/react-board';
import { Service } from '../../../components/service/service';

export default createBoard({
    name: 'Service',
    Board: () => <Service />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            right: 0,
            top: 0,
            bottom: 0,
            left: 0,
        },
        windowWidth: 430,
        windowHeight: 932,
    },
});
