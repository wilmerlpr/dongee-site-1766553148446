import React, { useEffect } from 'react';

// IMPORTANTE: Reemplaza 'tu_app_id_aqui' con tu App ID real de Intercom.
// Lo puedes encontrar en la configuración de tu cuenta de Intercom -> Installation.
const INTERCOM_APP_ID = 'tu_app_id_aqui'; 

export default function IntercomChat() {
  useEffect(() => {
    // Lógica de inicialización estándar de Intercom
    if (typeof window !== 'undefined') {
      (function () {
        var w = window as any;
        var ic = w.Intercom;
        if (typeof ic === "function") {
          ic('reattach_activator');
          ic('update', w.intercomSettings);
        } else {
          var d = document;
          var i = function () {
            (i as any).c(arguments);
          };
          (i as any).q = [];
          (i as any).c = function (args: any) {
            (i as any).q.push(args);
          };
          w.Intercom = i;
          var l = function () {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
            var x = d.getElementsByTagName('script')[0];
            x.parentNode?.insertBefore(s, x);
          };
          if (document.readyState === 'complete') {
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            w.addEventListener('load', l, false);
          }
        }
      })();

      // Arrancar Intercom
      (window as any).Intercom('boot', {
        app_id: INTERCOM_APP_ID,
        // Opciones de personalización:
        alignment: 'right',
        horizontal_padding: 20,
        vertical_padding: 20,
      });
    }

    // Limpieza al desmontar el componente (opcional, dependiendo de si es SPA)
    return () => {
        if ((window as any).Intercom) {
            // (window as any).Intercom('shutdown'); // Comentado para evitar que desaparezca al navegar si no es necesario
        }
    };
  }, []);

  return null; // Este componente no renderiza nada visualmente en el DOM de React
}