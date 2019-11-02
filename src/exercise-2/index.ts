import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Exercise2Options } from '../schematic';

export function exercise2(_options: Exercise2Options): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(_options.name);
    return tree;
  };
}