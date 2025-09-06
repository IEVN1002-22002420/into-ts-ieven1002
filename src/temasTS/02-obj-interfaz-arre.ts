interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    //la interogacion es para que no se pida el dato
    nota?:number;
}

const alumno:Alumno={
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    email: "juan@gmail.com",
    
}
console.table(alumno)
//arreglos
let mascotas=['perro','gato','perico'];
//para cambiar el texto
mascotas[1]='nuevo gato'
//agregar dato
mascotas.push('leon');
console.log(mascotas) 

//nuevo arreglo
let tem:(number|string)[]=[];
tem.push(11);
tem.push('once')
