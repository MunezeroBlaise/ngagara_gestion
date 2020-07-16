const mongoose=require('mongoose')
const ngagara=new mongoose.Schema({
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true
    },
    telephone:{
        type:Number,
        require:true
    },
    type_maison:{
        type:String,
        require:true
    },

    datepay:{
        type:Date,
        require:true
    },
    motif:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('ngagaras',ngagara)