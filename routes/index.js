const express= require('express')
const Ngagara=require('../models/Ngagara')
const router=express.Router()
router.get('/',(req,res)=>{
   res.render('index')
})

router.get('/maison',(req,res)=>{
    Ngagara.find({prenom: 'Aime'},(err,ngagaras)=>{
        if(err) console.log(err)
        
        res.render('maison',{ ngagaras:ngagaras })
    })
})
router.get('/1chambre',(req,res)=>{
    Ngagara.find({prenom: 'samuel'},(err,ngagaras)=>{
        if(err) console.log(err)
        
        res.render('1chambre',{ ngagaras:ngagaras })
    })
})
router.get('/2chambres',(req,res)=>{
    Ngagara.find({prenom: 'Rebecca'},(err,ngagaras)=>{
        if(err) console.log(err)
        
        res.render('2chambres',{ ngagaras:ngagaras })
    })
})
router.get('/chambrette',(req,res)=>{
    Ngagara.find({prenom: 'Daniel'},(err,ngagaras)=>{
        if(err) console.log(err)
        
        res.render('chambrette',{ ngagaras:ngagaras })
    })
    
})
router.get('/ajouter',(req,res)=>{
    res.render('ajouter')
})
router.post('/add', (req,res)=>{
   const newNgagara=new Ngagara({
       nom:req.body.nom,
       prenom:req.body.prenom,
       telephone:req.body.telephone,
       type_maison:req.body.type_maison,
       datepay:req.body.datepay,
       motif:req.body.motif
   })
   newNgagara.save((err)=>{
       if(err) console.log(err)
       res.redirect('/')
   })
})
module.exports=router
