const db = require("../db/models");

const produtosControllers = {
  //criar listar imagem
 

  //criar listar imagem
  async listar(req, res) {
    //recuperar imagem do banco
    try {
      const { lojaId } = req.params;
      const user = await db.Lojas.findByPk(lojaId, {
        //incluir associçao

        //quiser mostrar
        include: {
          association: "produto",
          attributes: ["name", "quantidade"],
          through: {
            attributes: ["lojaId", "produtoId"],
          },
        },
      });
//so produto
   //   return res.json(user.produto);
  
  //loja e produto
   return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro do Servidor Interno" });
    }
  },
  //cadastrar

  async criar(req, res) {
    // receber dados enviados no corpo
    try {
      const { lojaId } = req.params;
      const { name, quantidade } = req.body;
      const user = await db.Lojas.findByPk(lojaId);
      if (!user) {
        return res.status(422).json({ message: `Loja não encontrada` });
      }
      // cadastrar no banco de dados
      // tecnologia criada ou encontrada no metodo findOrCreate
      const [produto] = await db.Produtos.findOrCreate({
        //procura produto onde esta tentando criar
        where: { name, quantidade },
      });
      await user.addProduto(produto);
      return res.json(produto);
      // const post= await db.Produtos.create({name, quantidade, lojaId});
      //     // cadastrado com sucesso
      //     return res.status(200).json(post);
    } catch (err) {
      return res.status(400).send({ err: err });
    }
  },

  async ler(req, res) {
    const { id } = req.params;
    try {
      const produtos = await db.Produtos.findOne({ where: { id } });

      return res.status(200).json(produtos);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, quantidade, lojaId } = req.body;
      //imagem atual no banco de dados
      const produtos = await db.Produtos.findOne({ where: { id } });
      if (!produtos) {
        return res.status(400).json({
          message: "Produto não encontrado",
        });
      } else {
        await db.Produtos.update(
          { name, quantidade, lojaId },
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
      return res
        .status(400)
        .send({ err: err, message: "Preencha os dados Corretamente" });
    }
  },
  async delete(req, res) {
    try {
      const { lojaId } = req.params;
      const { name } = req.body;
      const user = await db.Lojas.findByPk(lojaId);
      if (!user) {
        return res.status(422).json({ message: `Loja não encontrada` });
      }

      const produto = await db.Produtos.findOne({ where: { name } });
      if (!produto) {
        return res.status(400).json({
          message: "Produto não encontrado",
        });
      } else {
        await user.removeProduto(produto);
        //await res.json()
        await res.status(200).json({
          message: "Deletado com suceso!",
        });
      }
    } catch (err) {
      return res.status(400).send(err);
    }

    // try {
    //   const { id } = req.params;

    //   const rows = await db.Lojas.findOne({ where: { id } });
    //   if (!rows) {
    //     return res.status(400).json({
    //       message: "Estudante não encontrado",
    //     });
    //   } else {
    //     await db.Lojas.destroy({ where: { id } });

    //     return res.status(200).json({
    //       message: "Deletado com suceso!",
    //     });
    //   }
    // } catch (err) {
    //   return res.status(400).send(err);
    // }
    // },
  },
};
module.exports = produtosControllers;
