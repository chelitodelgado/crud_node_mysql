// Rutas
import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, activarUsuario } from '../controllers/usuarios';

const router = Router();

router.get('/',       getUsuarios );
router.get('/:id',    getUsuario );
router.post('/',      postUsuario );
router.put('/:id',    putUsuario );
router.delete('/:id', deleteUsuario );
router.put('/activar/:id',    activarUsuario );



export default router;