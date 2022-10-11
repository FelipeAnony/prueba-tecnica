**Notas**

- Toda la arquitectura de esta aplicación se basa en mi interpretación actual de Clean Architecture y su integracion con React.

- El objetivo es estructurar el sistema para que las responsabilidades de cada parte estén bien distribuidas, respetando una estricta regla de dependencia, que garantice un sistema fácil de mantener, fácil de agregar nuevas funcionalidades, fácil de testear y escalar. Una vez que todo este bien implementado, debería ser posible cambiar cualquier tipo de librería o servicio externo con facilidad. Incluso el propio React debería ser posible de cambiar con facilidad, reutilizando el máximo de código posible, sin necesidad de cambiar el "Core" de la aplicación. En este abordaje, los componentes de React tienen como única responsabilidad, renderizar elementos en el DOM y hacer el bindig de eventos. Los Custom hooks sirven como puente entre el core de la aplicación, los componentes y los recursos de React.

- Si por algún motivo tenemos que cambiar de React para Vue, por ejemplo, no tendríamos que cambiar ninguna línea de código del core de la aplicación, apenas cambiaríamos las cosas específicas de React.
  Lo mismo pasa con otras partes del sistema. Si fuera necesario cambiar el actual httpFetchClient para utilizar Axios o cualquier otra librería, únicamente tendríamos que crear un httpAxiosClient que implemente el protocolo de httpClient y todo sigue funcionando normalmente sin necesidad de cambiar nada más.

-En una aplicación tan pequeña, quizás no quede tan claro todos los beneficios de utilizar Clean Architecture y hasta podría parecer que sería mejor hacerlo sin una buena arquitectura, pero lo que pasa, es que la única manera de implementar una buena arquitectura y crear un buen código es haciéndolo todo bien desde el principio. Probablemente tardaría la mitad del tiempo o hasta menos si simplemente me enfocara en hacer algo que funcione sin preocuparme con calidad, pero si así lo hiciera y más tarde tuviera que hacer mantenimiento del código o adicionar features nuevas, la tendencia es que cada vez más quede más costoso y tome más tiempo en hacerlo. Por otro lado, con Clean Architecture, TDD y respeto a las buenas prácticas, en el inicio tardas más tiempo en hacer las cosas, porque tienes mucho más que hacer que alguien que no utiliza estas técnicas, pero a medida que tu aplicación crece, se queda cada vez más confiable, robusta y cada vez más necesitas de menos tiempo y esfuerzo para hacer mantenimiento o adicionar nuevas features.

**Significado de los nombres utilizados en archivos:**

- remote\*\*.ts: Cualquier usecase de data layer que tiene que hacer peticiones a servicios externos.

- local\*\*.ts: Cualquier usecase de data layer que trabaja unicamente con recursos en cache.

- \*\*Adapter.ts: Cualquier adapter. (Generalmete utilizado para implementar inversion de dependencias entre el data y infra layer.)

**Camadas**

- domain => Reglas de negocio. Solo debería cambiar si las reglas de negocio también cambiaren, no debería modificarse si cambiamos una librería por ejemplo. En esa camada solo existen abstracciones.

- data => Reglas de aplicación. Aquí tenemos las implementaciones del domain. Solo debería cambiar para atender los protocolos del domain. Tampoco debería ser modificado en el caso de cambiar una librería.

- infra => Camada donde implementamos las depedencias de data layer, los adapters. En el caso de tener que cambiar cualquier librería del proyecto, excepto de React que pertenece al presentation layer, hacemos el cambio aquí creando un nuevo adapter. De esta manera, ninguna otra parte de la aplicación tiene que ser alterada en el caso de cambiar una librería.

- main => Entry point del proyecto. Además del index, tenemos archivos útiles al proyecto y hacemos la composición de los usecases de data layer con sus debidas dependencias, utilizando factories.

- presentation => Recursos que componen la interfaz de usuario, en este caso, los recursos de React.
