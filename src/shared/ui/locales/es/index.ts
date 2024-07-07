interface IEntryControlTexts {
  MENU_TITLE: string;
  MENU_DESCRIPTION: string;
  MENU_BUTTON_NAME: string;
  SECTION_ENTRY_CONTROL_TITLE: string;
  MODAL_CHECK_IN: string;
  MODAL_CHECK_OUT: string;
  MODAL_CHECK_ERROR: string;
  MODAL_RANGE_HOURS_ERROR: string;
  MODAL_RANGE_HOURS_ERROR_CHECKIN: string;
  MODAL_RANGE_HOURS_ERROR_CHECKOUT: string;
}

interface ITYPES_LIST_REQUESTS {
  MENU_LIST_TITLE: string;
  MENU_LIST_DESCRIPTION: string;
  MENU_LIST_BUTTON: string;
}

interface ITYPES_WEEKLY_AGENDA {
  MENU_WEEKLY_AGENDA_TITLE: string;
  MENU_WEEKLY_AGENDA_DESCRIPTION: string;
  MENU_WEEKLY_BUTTON: string;
  WEEkLY_ENABLED: string;
  WEEkLY_ENABLED_STYLE: string;
  WEEkLY_NOT_ENABLED: string;
  WEEkLY_NOT_ENABLED_STYLE: string;
  WEEKLY_WEEK: string;
  WEEKLY_DESCRIPTION_BOLD: string;
  WEEKLY_DESCRIPTION_NORMAL: string;
  WEEKLY_DESCRIPTION_LINK: string;
  WEEKLY_SELECT_OPTION_PLACEHOLDER: string;
  WEEKLY_SELECT_OPTION_ALL: string;
  WEEKLY_MODAL_SUCCESS: string;
  WEEKLY_MODAL_ERROR: string;
  WEEKLY_MODAL_SUCCESS_TITLE_INIT: string;
  WEEKLY_MODAL_SUCCESS_TITLE_END: string;
  WEEKLY_MODAL_SUCCESS_DESCRIBE: string;
  WEEKLY_MODAL_CONFIRM: string;
  WEEKLY_MODAL_CONFIRM_TITLE: string;
  WEEKLY_MODAL_CONFIRM_DESCRIBE: string;
  WEEKLY_MODAL_SUCCESS_TITLE_PENDING_START: string;
  WEEKLY_MODAL_SUCCESS_TITLE_PENDING_END: string;
  WEEKLY_MODAL_ERROR_TITLE: string;
  WEEKLY_MODAL_ERROR_DESCRIBE: string;
}

const entryControlTexts: IEntryControlTexts = {
  MENU_TITLE: "Control de ingreso",
  MENU_DESCRIPTION:
    "Registra horas de check-in y check-out, incidencias y observaciones",
  MENU_BUTTON_NAME: "Control de ingreso",
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

export const TYPES_LIST_REQUESTS: ITYPES_LIST_REQUESTS = {
  MENU_LIST_TITLE: "Listado de solicitudes",
  MENU_LIST_DESCRIPTION:
    "Gestiona tus solicitudes: busca, revisa detalles, edita o anula",
  MENU_LIST_BUTTON: "Listado",
};

export const TYPES_WEEKLY_AGENDA: ITYPES_WEEKLY_AGENDA = {
  MENU_WEEKLY_AGENDA_TITLE: "Agenda semanal de reservas",
  MENU_WEEKLY_AGENDA_DESCRIPTION:
    "Revisa y crea nuevas solicitudes de Reposición",
  MENU_WEEKLY_BUTTON: "Agenda semanal",
  WEEkLY_ENABLED: "HABILITADO",
  WEEkLY_ENABLED_STYLE: "btn-enabled",
  WEEkLY_NOT_ENABLED: "NO HABILITADO",
  WEEkLY_NOT_ENABLED_STYLE: "btn-not-enabled",
  WEEKLY_WEEK: "Semana",
  WEEKLY_DESCRIPTION_BOLD: "Crea nuevas solicitudes ",
  WEEKLY_DESCRIPTION_NORMAL: `haciendo click en algún espacio disponible y llenando el formulario. Si necesitas gestionar tus solicitudes anteriores, puedes hacerlo desde el`,
  WEEKLY_DESCRIPTION_LINK: "Resumen de Solicitudes",
  WEEKLY_SELECT_OPTION_PLACEHOLDER: "Filtrar por proveedor",
  WEEKLY_SELECT_OPTION_ALL: "Todos",
  WEEKLY_MODAL_SUCCESS: "Launch modal success",
  WEEKLY_MODAL_ERROR: "Launch modal error",
  WEEKLY_MODAL_SUCCESS_TITLE_INIT: "Nueva Solicitud N° ",
  WEEKLY_MODAL_SUCCESS_TITLE_END: " creada con éxito",
  WEEKLY_MODAL_SUCCESS_DESCRIBE:
    "Recuerda que la solicitud debe ser aceptada o rechazada por Blue Express. La creación de una solicitud no garantiza la reserva de un andén para reposición.",
  WEEKLY_MODAL_CONFIRM: "Launch modal confirm",
  WEEKLY_MODAL_CONFIRM_TITLE: "Seguro que deseas anular la solicitud Nº ",
  WEEKLY_MODAL_CONFIRM_DESCRIBE: "Se perderán todos los datos ingresados",
  WEEKLY_MODAL_SUCCESS_TITLE_PENDING_START: "Solicitud Nº ",
  WEEKLY_MODAL_SUCCESS_TITLE_PENDING_END: " anulada con éxito",
  WEEKLY_MODAL_ERROR_TITLE: "Lo sentimos, hubo un problema.",
  WEEKLY_MODAL_ERROR_DESCRIBE:
    "Por favor, verifica tu conexión a internet e intenta de nuevo. Si el problema persiste, contáctanos al equipo fulfillment o prueba nuevamente más tarde. Valoramos mucho tu paciencia y comprensión.",
};
