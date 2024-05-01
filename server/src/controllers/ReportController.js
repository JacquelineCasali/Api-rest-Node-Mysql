const {Op}=require('sequelize')
const db = require("../db/models");


const ReportController={
    //encontrar todas as lojas que tem nome que termina com teste
    // dessa lojas quero buscar que fica na rua guilherme
    // dessa lojas quero buscar que tem produto café 
    async show (req, res) {
      //return res.json({report:true})
    
      const lojas = await db.Lojas.findAll({
        attributes:['id','nome','email'],
    
        where: {
            email:{
                [Op.like]:'%@gmail.com'
            }

      
            },
          
//busca por endereço
 include:[{association:'endereco', where:{rua:'Rua teste'}},
 {association:'produto',
 required:false,
 where:{
    
     name:
     {
        [Op.like]:'batata%'
     }
    }},
   
      
    ]});
       return res.json(lojas);
  }
}
module.exports=ReportController;