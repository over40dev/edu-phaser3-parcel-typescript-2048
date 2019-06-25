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

 interface INameValue {
   name:string;
   value:any;
 }

// interface IMoveKeys {
//   Array<INameValue>};

interface IActionKeys {
  play:string;
};

interface ISetGameKeys {
  setGameKeys(keys?:string):Array<string>;
}

export {
  INameValue,
  IActionKeys,
  ISetGameKeys,
}
