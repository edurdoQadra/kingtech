<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script>
            window.Laravel = {
                baseUrl: "{{ env('APP_URL') }}"
            };
        </script>
          <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
         <script>
              Pusher.logToConsole = true;

            var pusher = new Pusher('2f8c4154a7ade73b67e2', {
            cluster: 'sa1'
            });

            var channel = pusher.subscribe('alertas-channel');
            channel.bind('alerta-creada', function(data) {
                alert('Nuevo mensaje: ' + JSON.stringify(data));
                                   });


         </script> 

    </body>
</html>
