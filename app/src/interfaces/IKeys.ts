// interface IMoveKeys {
//   A?:string;
//   left?:string;
//   D?:string;
//   right?:string;
//   W?:string;
//   up?:string;
//   S?:string;
//   down?:string;
// };

// interface IMoveKeys: {Array<string>};

interface IActionKeys {
  play:string;
};

interface ISetGameKeys {
  setGameKeys(keys?:string):Array<string>;
}

export {
  // IMoveKeys,
  IActionKeys,
  ISetGameKeys,
}
