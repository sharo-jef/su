#!/usr/bin/env node
import { spawn } from 'child_process';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .locale('en')
    .argv;

void async function main(_argv) {
    const child = spawn('pwsh', ['-executionpolicy', 'unrestricted', '-command', 'start -verb runas pwsh'], { shell: 'powershell' });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('error', err => console.error(err));
}(argv);
