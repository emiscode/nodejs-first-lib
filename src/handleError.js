import chalk from 'chalk';

const handleError = (err) => {
    throw new Error(chalk.red(err));
}

export default handleError;