/*
Copyright (2024) Bytedance Ltd. and/or its affiliates
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const {
  selectUse,
  selectExample,
  selectPackages,
  runCommand,
  runParallel,
} = require('./utils');

const main = async () => {
  const use = await selectUse();
  if (use === 'example') {
    const examplePath = await selectExample('build');
    await runCommand(examplePath, 'build');
  } else if (use === 'packages') {
    const packages = await selectPackages('build');
    await runParallel(packages, 'build');
  }
};

main();
