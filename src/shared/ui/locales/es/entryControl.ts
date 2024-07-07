interface IEntryControlTexts {
  MENU_ENTRY_CONTROL_TITLE: string;
  MENU_ENTRY_CONTROL_DESCRIPTION: string;
  MENU_ENTRY_CONTROL_BUTTON_NAME: string;
  SECTION_ENTRY_CONTROL_TITLE: string;
  MODAL_CHECK_IN: string;
  MODAL_CHECK_OUT: string;
  MODAL_CHECK_ERROR: string;
  MODAL_RANGE_HOURS_ERROR: string;
  MODAL_RANGE_HOURS_ERROR_CHECKIN: string;
  MODAL_RANGE_HOURS_ERROR_CHECKOUT: string;
}

export const entryControlTexts: IEntryControlTexts = {
  MENU_ENTRY_CONTROL_TITLE: "Control de ingreso",
  MENU_ENTRY_CONTROL_DESCRIPTION:
    "Registra horas de check-in y check-out, incidencias y observaciones",
  MENU_ENTRY_CONTROL_BUTTON_NAME: "Control de ingreso",
  SECTION_ENTRY_CONTROL_TITLE: "Control de Ingresos andenes",
  MODAL_CHECK_IN: "Confirma que deseas registrar el check-in de la reserva N°",
  MODAL_CHECK_OUT:
    "Confirma que deseas registrar el check-out de la reserva N°",
  MODAL_CHECK_ERROR: "Es necesario primero registrar la hora del check-in",
  MODAL_RANGE_HOURS_ERROR:
    "¡Recuerda que el check-in solo está disponible dentro del horario programado en la agenda!",
  MODAL_RANGE_HOURS_ERROR_CHECKIN:
    "¡Recuerda que el check-in solo está disponible dentro de 24 horas respecto a la fecha ingresada en la agenda!",
  MODAL_RANGE_HOURS_ERROR_CHECKOUT:
    "¡Recuerda que el check-out solo está disponible dentro de 24 horas respecto a la fecha ingresada en la agenda!",
};
