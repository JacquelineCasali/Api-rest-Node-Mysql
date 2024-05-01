const db = require("../db/models");

const lojaControllers = {
  //criar listar imagem
  async listar(req, res) {
    //recuperar imagem do banco
    try {
      const loja = await db.Lojas.findAll({
        order: [["nome", "ASC"]],
      });
      return res.json(loja);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro do Servidor Interno" });
    }
  },
  //cadastrar
  async criar(req, res) {
    // receber dados enviados no corpo
    try {
      const { nome, email } = req.body;

      //verificando se o email já esta cadastrado

      const user = await db.Lojas.findOne({ where: { email } });
      if (user) {
        return res
          .status(422)
          .send({ message: `Email ${email} já cadastrado` });
      }

      // cadastrar no banco de dados
      const newloja = await db.Lojas.create({ nome, email });
      // cadastrado com sucesso
      return res.status(200).json(newloja);
    } catch (err) {
      return res.status(400).send({ err: err });
    }
  },

  async ler(req, res) {
    const { id } = req.params;
    try {
      const loja = await db.Lojas.findOne({ where: { id } });

      return res.status(200).json(loja);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      //imagem atual no banco de dados
      const estudante = await db.Lojas.findOne({ where: { id } });
      if (!estudante) {
        return res.status(400).json({
          message: "Loja não encontrado",
        });
      } else {
        await db.Lojas.update({ nome, email }, { where: { id } });
        // // apaga o arquivo

        return res.status(200).json({
          message: "Loja atualizada com suceso!",
        });
        //  return res.status(200).json(edite);
      }
    } catch (err) {
      // return res.status(400).send(err);
      return res.status(400).send({ err: err });
    }
  },

  async delete(req, res) {
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
  },
};
module.exports = lojaControllers;
