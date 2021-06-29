export const constants = {
  SYSTEM_ID: 'WEBBASE',
  VERSION:'1.0.0-SNAPSHOT',
  EXTERNAL_SERVICES: {
    CORP_SERVICES: {
      CONTEXT: '/datosCorporativo',
      CONTROLLERS: {
        OFFICIAL: {
          PATH: '/funcionario',
          WS: {
            GET_USERS_BY_CODE: '/getUsersByCode'
          }
        }
      }
    }
  },
  OFFICIAL_TYPE_CONTACT: 'GTH',
  MESSAGES:{
    SUCCESS:'Message Success',
    INFO:'Message Info',
    WARNING:'Message Warning',
    ERROR:'Message Error',
    FORM_VALID:'Form is Valid',
    DATA_NOT_FOUND:'No se encontraron resultados, recuerde buscar por los nombres del funcionario'
  }
};
