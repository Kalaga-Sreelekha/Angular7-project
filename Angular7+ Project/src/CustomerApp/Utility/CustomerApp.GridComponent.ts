import{ Component,Input,Output,EventEmitter } from "@angular/core"

 @Component({
    selector:"grid-ui",
    templateUrl:'./CustomerApp.Grid.html'
})

export class GridComponent{
    //all the logic the code behind grid
    gridColumns: Array<any> = new Array<any>;
    gridData :  Array<any> = new Array<any>;
 
@Input("grid-columns")
 set setGridColumns(_gridColumns:Array<any>){
    this.gridColumns = _gridColumns;
 }
 @Input("grid-data")
 set GridData(_gridData:Array<any>){
    this.gridData = _gridData
 }
@Output("grid-selected")
eventemitter:EventEmitter<any> = new EventEmitter<any>();
 SelectGrid(_selected:Object){
    //emeit out a event will send a signal to ui under whiuch this coponetn is running
   this.eventemitter.emit(_selected)
 }
}