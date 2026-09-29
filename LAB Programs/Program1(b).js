const EventEmitter = require("events");
class Button extends EventEmitter{
    click(){
        this.emit("clicked");
    }
}

const button = new Button();

button.on('clicked', ()=>{
    console.log("Button Clicked");
});

button.click();
