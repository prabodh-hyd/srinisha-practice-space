
/*
    tables: is a function to print traditional multiplication tables
    @param a: is the number of tables
    @param b: is the number of multiples
*/
function tables(startTable = 2, endTable = 10, multiples = 10) {
    for (let i = startTable; i <= endTable; i++) {
        for (let j = 1; j <= multiples; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
        console.log("\n");
    }
}

function printTablesInRange(startTable, endTable) {
    // how can i use tables function to print tables in a range
    
    tables(startTable, endTable);
}

printTablesInRange(33,35);
