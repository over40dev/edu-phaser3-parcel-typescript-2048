 interface IMoveKey {
   name:string;
   value:number;
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
