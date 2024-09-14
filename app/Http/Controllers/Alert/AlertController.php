<?php
namespace App\Http\Controllers\Alert;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AlertaResource;
use Inertia\Inertia;
use App\Models\Alerta;
use App\Events\AlertaCreada;

class AlertController extends Controller
{
    public function index()
    {
        $alertas = Alerta::all();
        return Inertia::render('Admin/Alerts/Index', [
            'alertas' => AlertaResource::collection($alertas),
        ]);
    }

    public function store(Request $request)
    {
        // Validación (descomentado si es necesario)
        // $request->validate([ ... ]);

        // Crear la alerta
        $alerta = Alerta::create($request->all());

        // Emitir el evento con la alerta creada
        event(new AlertaCreada($alerta));

        return response()->json([
            'message' => 'Alerta creada satisfactoriamente',
            'status' => 200,
            'alerta' => new AlertaResource($alerta)
        ]);
    }

    public function update(Request $request, $id)
    {
        // Validación
        $request->validate([ /* ... */ ]);

        // Obtener la alerta por su ID
        $alerta = Alerta::find($id);

        if (!$alerta) {
            return response()->json([
                'message' => 'Alerta no encontrada',
                'status' => 404
            ]);
        }

        // Actualizar los datos de la alerta
        $alerta->update($request->all());

        return response()->json([
            'message' => 'Alerta actualizada satisfactoriamente',
            'status' => 200
        ]);
    }

    public function destroy($id)
    {
        $alerta = Alerta::findOrFail($id);
        try {
            $alerta->delete();
            return redirect()->route('alertas.index')->with('success', 'Alerta eliminada correctamente.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Ha ocurrido un error al eliminar la alerta.');
        }
    }

    public function createAndBroadcast(Request $request)
    {
        // Validación de la solicitud con los campos necesarios
        $validatedData = $request->validate([
            'codigo_sede' => 'required|string',
            'mensaje' => 'required|string',
            'role' => 'required|string',
        ]);

        // Crear la alerta con los datos validados
        $alerta = Alerta::create($validatedData);

        // Emitir el evento con la alerta creada
        //event(new AlertaCreada($alerta));

        // Devolver la respuesta JSON con los detalles de la alerta
        return response()->json([
            'message' => 'Alerta creada y evento emitido satisfactoriamente',
            'status' => 200,
            'alerta' => new AlertaResource($alerta)
        ]);
    }
}
