#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RdsDataNodejsStack } from '../lib/rds-data-nodejs-stack';

const app = new cdk.App();
new RdsDataNodejsStack(app, 'RdsDataNodejsStack', {
});