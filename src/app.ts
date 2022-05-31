import {Something} from './services/something.service';

const inquirer = require('inquirer');
const logger = require('./helpers/logger');

async function promptMenu(): Promise<any> {
    return inquirer.prompt([{
        type: 'list',
        name: 'option',
        message: 'Select option:',
        choices: [
            {
                name: 'Do something',
                value: 'something',
            }
        ]
    }]);
}

(async () => {
    try {
        switch ((await promptMenu()).option) {
            case 'something':
                await new Something().process();
                break;
        }
    } catch (e: any) {
        logger.error(e);
    }
})();
