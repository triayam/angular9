import { Component, OnInit, Input } from '@angular/core';


export interface ftype { 
  type: string ;
  value : string;
    
} 
export interface FileUpload {
 name: string;
 ftype: Array<ftype>;
 size: number;
 date: Date;  

}  
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})

export class FileComponent implements OnInit {
@Input() my_file_title;
  @Input() my_file_content;
  optSelected ="";
  currentOption = {'type': 'file-type', 'value': 'txt'}
  public  fileUpload = {} as FileUpload ;
  constructor() {
  
    this.fileUpload.name="world.txt"; 
    this.fileUpload.ftype = [ {'type': 'file-type', 'value': 'pdf'},{'type': 'file-type', 'value': 'txt'},
    {'type': 'file-type', 'value': 'zip'} ]  as ftype[];
     this.fileUpload.size  = 10;
    this.fileUpload.date = new Date();  
  }
  ngOnInit(): void {
 
  }
 
  onTypeChange(option) {
    this.optSelected = option.value;
    this.currentOption = option;
    console.log("selected  "+this.optSelected)
    console.log("currentOption  "+JSON.stringify(this.currentOption))
    console.log("currentOption.value == optSelected "+(this.currentOption.value == this.optSelected))
  }
  customAction () {
   console.log("gold time ")
  }
  
  
}
