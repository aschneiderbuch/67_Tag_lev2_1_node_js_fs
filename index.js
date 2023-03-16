import fs, { copyFileSync } from 'fs';

const data2 = []

// !! read JSON file
fs.readFile(("./file.json"), "utf-8", (err, data) => {
    if (err) {
        console.log("Error fs.readFile: --> ", err)
    }
    else {
/*         console.log("fs.readFile file.json klappt--> ", data)
 */
        // ! umformen mit JSON.parse
        const data2 = JSON.parse(data)


        // ! Öffnen der Datei   a+ damit Daten angehängt werden
        fs.open(("./file.txt"), "a+", (err, fd)=>{
            if (err) {
                console.log("Error fs.open: --> ", err)
            }
            else{
                console.log(fd )

                // ! forEach   und data2 auslesen
                data2.forEach((i) =>{
                    const einzelnerInput = `${i.id} - ${i.title} \n ${i.description} \n`


                    // ! jetzt praktisch einzeln rein schreiben    so wie push
                    fs.write(fd, einzelnerInput, (err) =>{
                        if (err) {
                            console.log("Error fs.write  wie push --> ", err)
                        }
                        else {
                            console.log("Daten erstellen hat geklappt")
                        }
                    })
                })

                // ! schließen der Datei
                fs.close(fd , (err) =>{
                    if (err) {
                        console.log("Error fs.close --> ", err)
                    }
                    else{ console.log("Datei geschlossen")}
                })
            }
        })


        

       


    }
}
)

/* 
// ????   wie bekomme ich die data hier draußen lesbar?
const data3 = data2

console.log(data3)

fs.writeFile(("./file.txt"), JSON.stringify(data3), 'utf-8', (err, data) => {
    if (err) {
        console.log("Error .writeFile file.txt --> ", err)
    }
    else {
        console.log("file.txt hat geklappt")
    }
}) */



/* fs.writeFile(("./file.txt"), "test", {flag: "a+" }, (err, data) => {
    if (err) {
        console.log("Error .writeFile file.txt --> ", err)
    }
    else {
        console.log("file.txt hat geklappt")
  console.log((JSON.stringify(data3)))
         let data4 = JSON.stringify(data3) 
        data3.forEach(element => {
           console.log(element.id + " - " + element.title + "\n" + element.description +"\n" ) 

           fs.writeFile(("./file.txt"), (element.id + " - " + element.title + "\n" + element.description +"\n") ,(err, data) =>{
            if(err) {
                console.log("Error fs.writeFile  fs.wirteFile file.txt --> ", err)
            }
            else{
                console.log(data)
                console.log("txt input hat geklappt")
            }
           })
        });
    }
}) */