export class MySet {
  private _values: any[];

  constructor(values?: any[]) {
    this._values = values || [];
  }

  add(value: any) {
    if (!this._values.includes(value)) this._values.push(value);
  }

  has(value: any) {
    return this._values.includes(value);
  }

  delete(value: any) {
    return this._values.splice(this._values.indexOf(value), 1)
  }

  size() {
    return this._values.length;
  }

  clear() {
    return this._values = [];
  }

  values() {
    return this._values;
  }

}