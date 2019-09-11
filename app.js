const { argv } = require('./config/yargs');
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========Por hacer==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado = true) {
            console.log(`Se ha actualizado el status de la tarea ${argv.descripcion} a ${argv.completado}`);
        } else {
            console.log(`La tarea ${argv.descripcion} no existe actualmente`);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado = true) {
            console.log(`Se ha eliminado la tarea ${argv.descripcion}`);
        } else {
            console.log(`No se eliminó la tarea ${argv.descripcion}`);
        }
        break;
    default:
        console.log('Comando no válido');
        break;
}