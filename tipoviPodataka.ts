let godine :number = 20;

let ime :string = "Milos";
 let studira :boolean = true;


 let predmeti :String[] = ["EPOS", "cloud"];
 let ocene :number[] = [1, 2];


 let tuple: [string, number] = ["SASA", 2];


 enum Modul{
    epos,
    setInterval,
    ii
 }


 let modul: Modul.epos;

 let student:{ime :String, godine :number, studira :boolean} = {
    ime :"Milos", 
    godine : 20, 
    studira : true
 }


 let brojIliString:number | string


function cao(): void{
    console.log("CAO");
}

let u :undefined = undefined;

let nekaVrednost:any = "Neki string";

let duzina :number =(nekaVrednost as string).length;


console.log(godine, ime, studira);

console.log(predmeti, ocene);

console.log(Modul);

console.log(student);




















