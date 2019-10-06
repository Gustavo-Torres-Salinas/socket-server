import{Router, Request, Response} from 'express';

//Esxportamos el router para que pueda ser usado por index.ts
//export const router = Router();

const router = Router();

// dentro de la constante se define la ruta y el Handler, funcion de flecha
router.get('/mensajes',(req: Request,res:Response)=>{
    res.json({
        ok: true,
        mensaje: 'Mensaje de prueba'
    });
});

router.post('/mensajes',(req: Request,res:Response)=>{
    
    //leyendo datos para el metodo POST utilizando la configuracion del body parse de index.ts
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo: cuerpo,
        //sin redundancia
        de,
        mensaje: 'Mensaje de prueba POST'
    });
});

//Leer URL
router.post('/mensajes/:id',(req: Request,res:Response)=>{
    
    //leyendo datos para el metodo POST utilizando la configuracion del body parse de index.ts
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo: cuerpo,
        //sin redundancia
        de,
        id,
        mensaje: 'Mensaje de prueba POST'
    });
});

//De ptra manera exportamos
export default router;