// @ts-check
/* eslint-disable class-methods-use-this */

import yaml from 'js-yaml';

export default class YamlParser {
  parse(data) {
    return yaml.load(data);
  }
};
