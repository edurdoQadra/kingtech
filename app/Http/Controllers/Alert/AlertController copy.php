<?php

namespace App\Http\Controllers\Alert;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AlertaResource; // Importar el recurso ClienteResource
use Inertia\Inertia;
use App\Models\Alerta;

class AlertController extends Controller
{
    public function index()
    {
        $alertas = Alerta::all(); 
       

        // Formatear las plataformas utilizando PlatformResource
        return Inertia::render('Admin/Alerts/Index', [
            'alertas' => AlertaResource::collection($alertas),
           
        ]);  

     }
       
    public function store(Request $request)
    {
        // $request->validate([           
        //     'fecha' => 'date',
        //     'dni' => 'string',
        //     'medio_de_contacto' => 'string',
        //     'medio_de_respuesta' => 'string',
        //     'como_llego_a_la_marca' => 'string',
        //     'tipo_negocio' => 'string',
        //     'estado' => 'string',
        //     'respuesta_asesor' => 'string',
        //     'primer_contacto' => 'string',
        //     'segundo_contacto' => 'string',
        //     'tercer_contacto' => 'string',
        //     'contacto' => 'string',
        //     'realizo_la_venta' => 'string',
        //     'futuro_socio' => 'string',
        // ]);

        // dd($request->all()); 
        // Crear el cliente si pasa todas las validaciones
        // $cliente = Cliente::create($request->all());

    $mensaje = "Este es un mensaje de texto simple desde un controlador de Laravel.";
    return response($mensaje, 200)
        ->header('Content-Type', 'text/plain');          

    //   if ($cliente) {
    //     $message = 'Cliente creado satisfactoriamente';
    
    //     return response()->json([
    //         'message' => $message,
    //        'status' => 200
    //     ]);
    //       }else{
    //         $message = 'Cliente no fue creado satisfactoriamente';
    
    //         return response()->json([
    //             'message' => $message,
    //            'status' => 404
    //         ]);
    //       }
     
       // return redirect()->route('clients.index');
    }

    public function update(Request $request, $id)
    {
        $request->validate([           
            'fecha' => 'date',
            'dni' => 'string',
            'medio_de_contacto' => 'string',
            'medio_de_respuesta' => 'string',
            'como_llego_a_la_marca' => 'string',
            'tipo_negocio' => 'string',
            'producto_o_servicio' => 'string',
            'estado' => 'string',
            'respuesta_asesor' => 'string',
            'primer_contacto' => 'string',
            'segundo_contacto' => 'string',
            'tercer_contacto' => 'string',
            'contacto' => 'string',
            'realizo_la_venta' => 'string',
            'futuro_socio' => 'string',
        ]);
    
        // Obtener el cliente por su ID
        $cliente = AlertaResource::find($id);
    
        if (!$cliente) {
            $message = 'Cliente no encontrado';
            return response()->json([
                'message' => $message,
                'status' => 404
            ]);
        }
    
        // Actualizar los datos del cliente
        $cliente->update($request->all());
    
        $message = 'Cliente actualizado satisfactoriamente';
    
        return response()->json([
            'message' => $message,
            'status' => 200
        ]);
    }   
    
    public function destroy($id)
    {
        $cliente = AlertaResource::findOrFail($id);
        // Aquí podrías agregar la validación de autorización si es necesario
        try {
            $cliente->delete();
            return redirect()->route('clients.index')->with('success', 'Cliente eliminado correctamente.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Ha ocurrido un error al eliminar el cliente.');
        }
    }

}
   

        //    //Obtener todos los clientes
        //     $transacciones = Transaction::all();        
        //     //Formatear los clientes usando ClienteResource
        //     $transaccionesFormateados = TransactionResource::collection($transacciones);
        //    // Devolver los clientes formateados como una respuesta JSON
        //     return response()->json($transaccionesFormateados);

