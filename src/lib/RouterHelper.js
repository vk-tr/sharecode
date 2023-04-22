import { useRouter } from 'vue-router';

import { HashGenerator } from './HashGenerator';

export class RouterHelper {
    constructor() {
        this.router = useRouter();
        this.hashGenerator = new HashGenerator();
    }

    goHome = async () => {
        this.router.push({
            path: '/home'
        }).then(_ => location.reload());
    }

    createSpace = async () => {
        this.router.push({
            name: 'editor',
            params: {
                id: await this.hashGenerator.hash()
            },
        });
    }
}
