class Texteditor{
  class TextEditor
{
    constructor()
    {
        this.buffer=[];
        this.file="";

    }

} printFile(){
               console.log(this.file);
               return this;
           }
}
const editor=new Texteditor();


writeStream(value){
 this.buffer.push(value);
}
undo(){
  this.buffer.pop();
 return this;
}
saveFile()
    {   let a="";
        for(let i = 0; i < this.buffer.length; i++)
        {
            a+=this.buffer[i];
        }

        return a;
    }
   