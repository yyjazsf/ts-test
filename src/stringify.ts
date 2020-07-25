type ReturnVal = string | undefined;

function stringify(
  value: any,
  replacer?: Array<number> | Function | null,
  space?: number | string | null
): ReturnVal {
  const type = Object.prototype.toString.call(value);
  switch (type) {
    case '[object Number]':
    case '[object Null]':
      return String(value);
    case '[object String]':
      return `"${value}"`;
    case '[object Array]':
    // todo
    case '[object Symbol]':
    // todo
    case '[object Symbol]':
    // todo
    case '[object Function]':
    // todo
    case '[object HTMLDivElement]':
    // todo
    default:
      return undefined;
  }
}

export default stringify;
