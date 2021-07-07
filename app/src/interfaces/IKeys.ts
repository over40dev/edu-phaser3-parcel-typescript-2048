 interface IMoveKey {
   key:string;
   value:number;
   role:string;
   velocityX?:number;
   velocityY?:number;
   listener?:any;
 }

// interface IActionKeys {
//   play:string;
// }

// interface ISetGameKeys {
//   setGameKeys(keys?:string):Array<string>;
// }

export {
  IMoveKey,
}
