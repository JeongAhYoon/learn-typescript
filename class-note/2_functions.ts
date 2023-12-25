// define the parameter type
function sum2(a: number, b: number){

    return a+b;
}

sum2(10,20);

// return type

function addNew(): number {
    return 10;
}

function sum3(a: number, b: number): number {

    return a+b;
}

//sum3(10,20,30);

//optional parameter

function log(a: string, b?:string, c?:string){

}
log('hello world');
log('hello ts', 'abc');