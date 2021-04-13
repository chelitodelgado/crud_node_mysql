"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Rutas
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = express_1.Router();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
router.put('/activar/:id', usuarios_1.activarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map