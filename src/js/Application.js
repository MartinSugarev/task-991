import EventEmitter from "eventemitter3";
import {Beat} from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
   
  constructor() {
    
    super();
    
    this.lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";
    
    this._beat = new Beat();
    document.querySelector(".main").appendChild(message);
     this._beat.addListener(this._beat.events.BIT, () => {
      console.log("beat");
      // this.emit(this._beat.events.BIT);
      this._create()
      
    })
  }
  
 
  _create(){

  
      for(let i = 0; i < this.lyrics.length; i++){
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = this.lyrics[i];
    
        document.querySelector(".main").appendChild(message);
      }
    
  }
  
}
