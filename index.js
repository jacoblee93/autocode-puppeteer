process.env.FUNCTIONS_EMULATOR = 'aws_lambda';
process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs12.x';

const chromium = require('chrome-aws-lambda');

module.exports = chromium;
