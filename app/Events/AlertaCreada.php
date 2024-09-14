<?php

namespace App\Events;
use App\Models\Alerta;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AlertaCreada
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $clientCode;
    public $role; // Rol destinatario

    public function __construct($message, $role, $clientCode)
    {
        $this->message = $message;
        $this->role = $role;
        $this->clientCode = $clientCode;
    }

    public function broadcastOn()
    {
        // Canal específico por rol
        return new Channel('alertas-channel.' . $this->role);
    }

    public function broadcastWith()
    {
        return [
            'message' => $this->message,
            'role' => $this->role,
            'clientCode' => $this->clientCode,
        ];
    }

    public function broadcastAs()
    {
        return 'alerta-creada';
    }
}
