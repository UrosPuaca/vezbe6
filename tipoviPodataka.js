var godine = 20;
var ime = "Milos";
var studira = true;
var predmeti = ["EPOS", "cloud"];
var ocene = [1, 2];
var tuple = ["SASA", 2];
var Modul;
(function (Modul) {
    Modul[Modul["epos"] = 0] = "epos";
    Modul[Modul["setInterval"] = 1] = "setInterval";
    Modul[Modul["ii"] = 2] = "ii";
})(Modul || (Modul = {}));
var modul;
var student = {
    ime: "Milos",
    godine: 20,
    studira: true
};
var brojIliString;
function cao() {
    console.log("CAO");
}
var u = undefined;
var nekaVrednost = "Neki string";
var duzina = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(Modul);
console.log(student);
