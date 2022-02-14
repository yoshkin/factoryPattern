// @ts-check

import path from 'path';
import fs from 'fs';
import JsonParser from './JsonParser.js';
import YamlParser from './YamlParser.js';
import Config from './Config.js';

const mapper = {
  'yml': YamlParser,
  'yaml': YamlParser,
  'json': JsonParser,
}

export default class {
  static factory(filePath) {
    const type = path.extname(filePath).slice(1);
    const parserClass = mapper[type];
    const data = fs.readFileSync(filePath, 'utf-8');
  
    return new Config(new parserClass().parse(data));
  }
};
