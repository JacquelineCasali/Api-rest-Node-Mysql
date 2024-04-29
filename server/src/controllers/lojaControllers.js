
const db = require("../db/models");



const lojaControllers = {
  
  //criar listar imagem
  async listar(req, res)  {
               //recuperar imagem do banco
       
      const ler = await db.Lojas.findAll({
        order:[['nome','ASC']]
      });
      return res.json(ler);
    },
//cadastrar
criar:("/",async(req, res) => {
    // receber dados enviados no corpo
try{
    const { nome} = req.body;
  // cadastrar no banco de dados
 const post= await db.Lojas.create({nome});
      // cadastrado com sucesso
      return res.status(200).send(post);
      
      }catch(err) {
      return res.status(400).send({err:err, message:"Email Já cadastrado"});
    }
}),


    ler:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;
      try {
        const estudante = await db.Lojas.findOne({ where: { id } });

        return res.status(200).json(estudante);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  update:("/:id",
    async (req, res) => {
      try {
              const { id } = req.params;
           const { nome} = req.body;
        //imagem atual no banco de dados
           const estudante = await db.Lojas.findOne({ where: { id } });
        if (!estudante) {
          return res.status(400).json({
            message: "Estudante não encontrado",
          });
        } else {
            await db.Lojas.update(
            { nome},
            { where: { id } }
          );
// // apaga o arquivo


          return res.status(200).json({
            message: "Estudante atualizado com suceso!",
              });
          //  return res.status(200).json(edite);
        }
      } catch (err) {
       // return res.status(400).send(err);
        return res.status(400).send({err:err, message:"Preencha os dados Corretamente"});
      }
    }),
  
  delete:
    ("/:id",
    async (req, res) => {
      try {
        const { id } = req.params;

        const rows = await db.Lojas.findOne({ where: { id } });
        if (!rows) {
          return res.status(400).json({
            message: "Estudante não encontrado",
          });
        } else {
          await db.Lojas.destroy({ where: { id } });

          return res.status(200).json({
            message: "Deletado com suceso!",
          });
        }
      } catch (err) {
        return res.status(400).send(err);
      }
    }),


  };
module.exports = lojaControllers;
