**_ Notas _**

- Toda la arquitectura de esta aplicación se basa en mi interpretación actual de Clean Architecture y su integracion con React.

- El objetivo es estructurar el sistema para que las responsabilidades de cada parte estén bien distribuidas, respetando una estricta regla de dependencia, que garantice un sistema fácil de mantener, fácil de agregar nuevas funcionalidades y fácil de testear. Una vez que todo este bien implementado, debería ser posible cambiar cualquier tipo de librería o servicio externo con facilidad. Incluso el propio React debería ser posible de cambiar con facilidad, reutilizando el máximo de código posible, sin necesidad de cambiar el "Core" de la aplicación. En este abordaje, los componentes de React tienen como única responsabilidad, renderizar elementos en el DOM y hacer el bindig de eventos. Los Custom hooks sirven como puente entre el core de la aplicación, los componentes y los recursos de React.
