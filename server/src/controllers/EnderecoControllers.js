

const db = require("../db/models");


const enderecoControllers = {
  
  //criar listar imagem
  async listar(req, res) {
               //recuperar imagem do banco
       try{
        const {lojaId}=req.params;
        const user = await db.Lojas.findByPk( lojaId
          ,{
            //incluir associçao 
          include:{association:'endereco'},
          
        } );

        return res.json(user);
       }catch(err){
        console.error(err);
return res.status(500).json({error:"Erro do Servidor Interno"})
       }
 
    },
//cadastrar
async criar (req, res) {
    // receber dados enviados no corpo
try{
  const {lojaId}=req.params;
  const { rua, numero,cep} = req.body;
    const user = await db.Lojas.findByPk(lojaId)
    if(!user){
      return res.status(422).json({message:`Loja não encontrada`});
    }
      // cadastrar no banco de dados
 const post= await db.Enderecos.create({rua, numero,cep,lojaId});
      // cadastrado com sucesso
      return res.status(200).json(post);
      
      }catch(err) {
      return res.status(400).send({err:err});
    }
},


async ler (req, res) {
      const { id } = req.params;
      try {
        const endereco = await db.Enderecos.findOne({ where: { id } 
          });

        return res.status(200).json(endereco);
      } catch (err) {
        return res.status(400).send(err);
      }
    },

    async update(req, res) {
      try {
              const { id } = req.params;
           const {rua, numero,cep,lojaId} = req.body;
        //imagem atual no banco de dados
           const produtos = await db.Enderecos.findOne({ where: { id },
          });
        if (!produtos) {
          return res.status(400).json({
            message: "Produto não encontrado",
          });
        } else {
            await db.Enderecos.update(
            { rua, numero,cep,lojaId},
            { where: { id } }
          );
// // apaga o arquivo


          return res.status(200).json({
            message: "Produtos atualizado com suceso!",
            produtos,
              });
          //  return res.status(200).json(edite);
        }
      } catch (err) {
       // return res.status(400).send(err);
        return res.status(400).send({err:err, message:"Preencha os dados Corretamente"});
      }
    },
  
    async delete(req, res)  {
      try {
        const { id } = req.params;

        const rows = await db.Enderecos.findOne({ where: { id } });
        if (!rows) {
          return res.status(400).json({
            message: "Produto não encontrado",
          });
        } else {
          await db.Enderecos.destroy({ where: { id } });

          return res.status(200).json({
            message: "Deletado com suceso!",
          });
        }
      } catch (err) {
        return res.status(400).send(err);
      }
    },


  };
module.exports = enderecoControllers;
