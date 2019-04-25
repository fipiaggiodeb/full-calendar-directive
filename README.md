# Directiva de calendario

Desarrollo local:
```sh
$ npm install -g browser-sync
$ npm run start
```

# Dependencias:

La directiva utiliza las siguientes librerías:

* FontAwesome v5.0.6
* Bootstrap v4
* Fullcalendar v4.0.1

Para que Fullcalendar funcione correctamente se deben cargar cada uno de sus módulos:

* Core
* Daygrid
* Timegrid
* Interaction
* List
* Locales

Cada uno de estos se carga con un script distinto en el HTML.
Revisar la documentación oficial: 
https://fullcalendar.io/

# Propiedades:

La directiva modifica a la librería de calendario con las siguientes propiedades:

## Click callback 

Evento que se dispara al clickear en un elemento de la lista (turno).
Recibe una función a ejecutar en el controlador, con el evento como argumento.

```javascript
$scope.saludo = event => console.log('Hiciste click en el evento:' + event.id);

```

```html
<deb-calendar clickcb="saludo"> <deb-calendar>
```

## Events

Array de objetos con todos los eventos a mostrar. 
Tienen que tener las props 'startAt' o 'start' y 'endAt' o 'end' para que puedan ser mostrados en la grilla.

## Calendar

Booleano que habilita el boton y la funcionalidad de calendario.

## Editable

Booleano que habilita el drag and drop de los eventos.

## Limit

Número que determina el límite de eventos a mostrar en la grilla de calendario. Pasado esa cantidad se colapsan y se muestra en un popup. 

# Default

String con el nombre de la vista a mostrar por defecto.
Puede ser: 

* 'listWeek'
* 'listDay'
* 'listMonth'
* 'dayGridMonth'

# Ejemplo de uso completo

```html
<deb-calendar 
    clickcb="saludo" 
    events="apiEvents" 
    calendar="true"
    editable="false"
    limit="2"
    default="listWeek"    
>
</deb-calendar>
```


