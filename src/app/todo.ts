export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  // Properties in the target object will be overwritten by properties
  // in the sources if they have the same key

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
