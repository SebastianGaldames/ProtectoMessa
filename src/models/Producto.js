import mongoosse,{Schema} from 'mongoose';

const productoSchema = new Schema({
    nombre: {type:String, maxlength:50,required:true, unique:true},
    precio: {type:Number,required:true},
    stock: {type:Number,required:true},
    Descripcion: {type:String, maxlength:200,required:true},
    Categoria: {type:String, maxlength:50,required:true},
    Genero: {type:String, maxlength:30,required:true},
    Temporada: {type:String, maxlength:30,required:true},
    estado: {type:Number, default:1}
});

const Producto = mongoosse.model('Producto',productoSchema);

export default Productol;