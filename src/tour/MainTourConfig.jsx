import React from "react";
import { Typography } from "@material-ui/core";

export const Mobile = [
  {
    selector: '[data-tut="reactour__searchBar"]',
    content: () => (
      <div>
        <Typography>
          En este campo podrá ingresar su <b>ubicación actual</b> para conocer tanto el CAPS como las paradas
          de colectivos más cercanas. La misma se verá reflejada en el mapa mediante un marcador.
        </Typography>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__autoLocationButton"]',
    content: () => (
      <div>
        <Typography>
          Al presionar el botón, su ubicación actual se obtendrá utilizando el GPS de su dispositivo.
        </Typography>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__menuButton"]',
    content: () => (
      <div>
        <Typography>Al presionar el botón se desplegarán las siguientes opciones:</Typography>
        <Typography>
          <b>Más cercano:</b> mostrará el CAPS más cercano a su ubicación actual.
        </Typography>
        <Typography>
          <b>Todos:</b> mostrará todos los CAPS en el mapa.
        </Typography>
        <Typography>
          <b>Filtrar:</b> los CAPS podrán ser filtrados por horario de atención, especialidad y barrio.
        </Typography>
      </div>
    ),
    observe: '[data-tut="reactour__menuButton--observe"]',
  },
];

export const Desktop = [
  {
    selector: '[data-tut="reactour__searchBar"]',
    content: () => (
      <div>
        <Typography>
          En este campo podrá ingresar su <b>ubicación actual</b> para conocer tanto el CAPS como las paradas
          de colectivos más cercanas. Al hacer click sobre la lupa, su ubicación se verá reflejada en el mapa
          mediante un marcador.
        </Typography>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__menuButton"]',
    content: () => (
      <div>
        <Typography>Al presionar el botón se desplegarán las siguientes opciones:</Typography>
        <Typography>
          <b>Más cercano:</b> mostrará el CAPS más cercano a su ubicación actual.
        </Typography>
        <Typography>
          <b>Todos:</b> mostrará todos los CAPS en el mapa.
        </Typography>
        <Typography>
          <b>Filtrar:</b> los CAPS podrán ser filtrados por horario de atención, especialidad y barrio.
        </Typography>
      </div>
    ),
    observe: '[data-tut="reactour__menuButton--observe"]',
  },
];
