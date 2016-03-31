## Para começão o projeto tenha  instalando em seu computador 

nodejs [node] (https://nodejs.org/en/)  versão > 5.

Após a instalação do nodejs vamos instalar alguns pacotes para o ajudar no desenvolvimento de nossos sistema.
yo [yeoman] (http://yeoman.io/) o yeman e um gerador de template para instalar npm install -g yo.


grunt [grunt-cli](http://gruntjs.com/) o grunt e um task runner pode automatizar alguma de suas atividades como mimificar css e  javascript executar test unit entre outros. para executar npm install -g grunt-cli.

bower [bower](http://bower.io/) o bower e um gerenciador de dependenciar web ele gerencia sua dependencias de código de terceiros. Mesmo que o bower possivelmente vai ser trocado pelo npm. para fazer a instalação do bowe npm install -g bower.

angular generator [angular generator](https://github.com/yeoman/generator-angular) e o generator que gerar app angularjs em uma arquitetura de pastas padrão para instalar npm install -g generator-angular.

# instagram

Esse projeto e um gerado com [yo angular generator](https://github.com/yeoman/generator-angular)
  
versão  0.15.1.

## Build & development

executar `grunt` para building e `grunt serve` para uma previa.

## Testing

executar `grunt test` para rodar os test unit com karma .


## Alterar o id do instagram
 no app.js altere o código do clientId para o da sua aplicação do instagram.[instagram](https://www.instagram.com/developer/)
$authProvider.instagram({
  clientId: 'Seu id do instagram',
  responseType:'token',
  scope:'public_content+comments+follower_list+relationships'
});
