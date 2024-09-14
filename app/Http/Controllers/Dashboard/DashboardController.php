<?php

namespace App\Http\Controllers\Dashboard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

/***/
use App\Http\Resources\LocallocationResource;             

use App\Http\Resources\TransactiondetailResource; 
use App\Http\Resources\TransactionResource; 
use App\Http\Resources\UtilityResource; 
/***/

/***/

use App\Models\Locationlocal;

use App\Models\Transaction;
use App\Models\Transactiondetail;
use App\Models\Utility;


class DashboardController extends Controller
{
    public function index(){

        
        $locationlocal = Locationlocal::all();
        $transacciones = Transaction::all();
        $transactiondetail= Transactiondetail::all();
        $utility= Utility::all();



    return Inertia::render('Admin/Dashboard', [
        'locationlocal' => LocallocationResource::collection($locationlocal),
        'transaction' => TransactionResource::collection($transacciones),
        'transactiondetail' => TransactiondetailResource::collection($transactiondetail),
        'utility' => UtilityResource::collection($utility),
    ]);  

    }
   


    public function transactions(Request $request)
    {


        $query = Transaction::query();

        if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
            $query->whereBetween('fecha', [$request->input('fecha_inicio'), $request->input('fecha_fin')]);
        }

        if ($request->has('codigo_sede')) {
            $query->where('codigo_sede', $request->input('codigo_sede'));
        }

        if ($request->has('codigo_plataforma')) {
            $query->where('codigo_sede', $request->input('codigo_plataforma')); // Ajuste necesario si 'codigo_plataforma' no se corresponde con 'codigo_sede'
        }

        $transacciones = $query->get();
        return response()->json($transacciones);
    }
  
    public function utility(Request $request)
    {
        $query = Utility::query();

        if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
            $query->whereBetween('created_at', [$request->input('fecha_inicio'), $request->input('fecha_fin')]);
        }

        if ($request->has('codigo_sede')) {
            $query->where('codigo_sede', $request->input('codigo_sede'));
        }

        if ($request->has('codigo_plataforma')) {
            $query->where('plataforma_id', $request->input('codigo_plataforma'));
        }

        $utilidades = $query->get();
        return response()->json($utilidades);
    }

    public function transactionDetails(Request $request)
    {
        $query = Transactiondetail::query();

        if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
            $query->whereBetween('created_at', [$request->input('fecha_inicio'), $request->input('fecha_fin')]);
        }

        if ($request->has('codigo_sede')) {
            $query->where('codigo_sede', $request->input('codigo_sede'));
        }

        if ($request->has('codigo_plataforma')) {
            $query->where('plataforma_id', $request->input('codigo_plataforma'));
        }

        $detalleTransacciones = $query->get();
        return response()->json($detalleTransacciones);
    }

    public function localLocation(Request $request)
    {
        $query = Locationlocal::query();

        if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
            // No hay campos de fecha en la tabla `ubicacion_sede`, por lo que este filtro se omitirá
        }

        if ($request->has('codigo_sede')) {
            $query->where('codigo_sede', $request->input('codigo_sede'));
        }

        if ($request->has('codigo_plataforma')) {
            // La tabla `ubicacion_sede` no tiene un campo `codigo_plataforma`, por lo que este filtro se omitirá
        }

        $ubicaciones = $query->get();
        return response()->json($ubicaciones);
    }
  
    
}
