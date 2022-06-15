/* IMPORTA O MÓDULO DO express */
const express = require('express');

/* IMPORTA O MODEL DE CATEGORIA */
const usuario = require('../model/Usuario');

/* CONFIGURA A FUNCIONALIDA DE ROTAS  */
const router = express.Router();

router.post('/usuario/cadastrarUsuario', (req, res) => {

    const { nome, sobrenome, email, celular } = req.body;

    usuario.create({
        nome,
        sobrenome,
        email,
        celular
    }).then(
        () => {
            res.status(200).json({ "MSG": "USUÁRIO INSERIDO COM SUCESSO!" });
        }
    );

});

module.exports = router;