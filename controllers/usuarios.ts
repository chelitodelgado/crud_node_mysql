// Controlodores

import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async ( req: Request, res: Response  ) => {
    
    const usuarios = await Usuario.findAll();
    res.json( {usuarios} )

}

export const getUsuario = async ( req: Request, res: Response  ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    
    if( !usuario ){
        res.status(404).json({
            msg: `El usuario con id ${id} no existe`
        });
    } else {
        res.json({usuario})
    }

}

export const postUsuario = async ( req: Request, res: Response  ) => {
    
    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existeEmail) {
            return res.status(400).json({
                msg: `Ya existe el usuario con email ${body.email}`
            });
        }
        
        const usuario = Usuario.build(body);
        await usuario.save();

        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export const putUsuario = async ( req: Request, res: Response  ) => {
    
    const { id } = req.params;
    const { body } = req;
    
    try {

        const usuario = await Usuario.findByPk( id );
        if( !usuario ) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        
        await usuario.update( body );

        res.json( usuario );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
        
    }

}

export const deleteUsuario = async ( req: Request, res: Response  ) => {
    
    const { id } = req.params;
    
    try {
        
        const usuario = await Usuario.findByPk( id );
        if( !usuario ) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        
        // Eliminacion logica
        await usuario.update( { estado: false } );
        
        // Eliminacion Fisica
        // await usuario.destroy();

        res.json( {
            msg: `El usuario con id ${id} fue eliminado`
        } );

    } catch (error) {
        res.status(500).json({
            msg: `Consulte con el administrador`
        })
    }
        
}

export const activarUsuario = async ( req: Request, res: Response ) => {
   
    const { id } = req.params;
    
    try {
        
        const usuario = await Usuario.findByPk( id );
        if( !usuario ) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        
        // Activacion logica
        await usuario.update( { estado: true } );
        
        res.json( {
            msg: `El usuario con id ${id} fue activado`
        } );

    } catch (error) {
        res.status(500).json({
            msg: `Consulte con el administrador`
        })
    }
        
}
