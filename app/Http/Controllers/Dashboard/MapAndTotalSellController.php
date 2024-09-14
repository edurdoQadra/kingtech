<?php

namespace App\Http\Controllers\Dashboard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

/***/
use App\Http\Resources\ClienteResource; // Import PersonResource
use App\Http\Resources\LocallocationResource;             
use App\Http\Resources\LocalResource; // Import PersonResource
use App\Http\Resources\PersonResource; 
use App\Http\Resources\PlatformResource; // Import PersonResource
use App\Http\Resources\PlatformsedeResource; 
use App\Http\Resources\StoreResource; // Import PersonResource
use App\Http\Resources\TransactiondetailResource; 
use App\Http\Resources\TransactionResource; 
use App\Http\Resources\UtilityResource; 
/***/

/***/
use App\Models\Cliente;
use App\Models\Person;
use App\Models\Local;
use App\Models\Locationlocal;
use App\Models\Platform;
use App\Models\Platformsede;
use App\Models\Transaction;
use App\Models\Transactiondetail;
use App\Models\Utility;
use App\Models\Asociado;

class MapAndTotalSellController extends Controller
{
   

    public function index()
    {
    // $transactionF =TransactionResource::collection($transaction);

        $clientes = Cliente::all();
        $personas = Person::all();
        $locales = Local::all();
        $locationlocal = Locationlocal::all();
        $platforms= Platform::all();
        $platformsede= Platformsede::all();
        $transacciones = Transaction::all();
        $transactiondetail= Transactiondetail::all();
        $utility= Utility::all();
        $socios = Asociado::all();



    return Inertia::render('Admin/Dashboard', [
        'personas' => PersonResource::collection($personas),
        'locales' => StoreResource::collection($locales),
        'locationlocal' => LocallocationResource::collection($locationlocal),
        'platformsede' => PlatformsedeResource::collection($platformsede),
        'transaction' => TransactionResource::collection($transacciones),
        'transactiondetail' => TransactiondetailResource::collection($transactiondetail),
        'utility' => UtilityResource::collection($utility),
    ]);                  

                
        
    }
    //
    public function filterByDate(Request $request)
    {
        $fecha = $request->input('fecha');

        $clientes = Locationlocal::whereDate('created_at', $fecha)->get();

        return response()->json([
            'clientes' => LocalResource::collection($clientes)
        ]);
    }
    //
    public function filterByDateRange(Request $request)
    {
        $fechaInicio = $request->input('fecha_inicio');
        $fechaFin = $request->input('fecha_fin');

        $clientes = Locationlocal::whereDate('created_at', '>=', $fechaInicio)
                            ->whereDate('created_at', '<=', $fechaFin)
                            ->get();

        return response()->json([
            'clientes' => LocalResource::collection($clientes)
        ]);
    }
     // filtro por sede
     public function filterByStore(Request $request)
     {
        //calcular ventas 
        
     }
     // filtro por plataforma
     public function filterByPlatform(Request $request)
     {
        
     }
    
}
