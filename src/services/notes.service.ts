import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class NotesService{
  constructor(public afDB: AngularFireDatabase){}
  notes = [
    {id:1, title:'Note 1', description:'Description of the note 1'},
    {id:2, title:'Note 2', description:'Description of the note 2'},
    {id:3, title:'Note 3', description:'Description of the note 3'}
  ];
  public getNotes(){
    //return this.notes;
    return this.afDB.list('notes/');
  }
  public getNote(id){
    //return this.notes.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,description:null};
    return this.afDB.object('notes/'+id);
  }
  public createNote(note){
    //this.notes.push(note);
    this.afDB.database.ref('notes/'+note.id).set(note);
  }
  public editNote(note){
    /*for(let i = 0; i < this.notes.length; i++){
      if (this.notes[i].id == note.id) {
        this.notes[i] == note;
      }
    }*/
    this.afDB.database.ref('notes/'+note.id).set(note);
  }
  public deleteNote(note){
    /*for(let i = 0; i < this.notes.length; i++){
      if (this.notes[i].id == note.id) {
        this.notes.splice(i,1);
      }
    }*/
    this.afDB.database.ref('notes/'+note.id).remove();
  }
}
