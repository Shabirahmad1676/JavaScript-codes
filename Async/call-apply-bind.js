let name = {
  Fname : 'Shabir',
  LName : 'Ahmad',
  Fullname : function(){
    console.log(this.Fname + ' ' + this.LName);
  }
}

name.Fullname()

let name2 = {
  Fname : 'Shairee',
  LName : 'Khan'
}

name.Fullname.call(name2)