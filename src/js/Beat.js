import EventEmitter from "eventemitter3";

export class Beat extends EventEmitter {
  
  constructor() {
    super()
    setInterval(() => {
      console.log("bit");
    }, 600);
  }
   events() {
   return {
     BIT: "bit",
   };
  }
}
