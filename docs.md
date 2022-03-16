### STATUS CODE

    Requisições que precisam de token mas não o receberam devem retornar um código de status 401;

    Requisições que não seguem o formato pedido pelo servidor devem retornar um código de status 400;

    Um problema inesperado no servidor deve retornar um código de status 500;

    Um acesso ao criar um recurso, no nosso caso usuário ou partida, deve retornar um código de status 201.


https://github.com/tryber/sd-014-a-trybe-futebol-clube/raw/main/diagram.png

warning Atenção warning para que os testes passem é necessário que a sua migration de users termine exatamente com -create-user.js.
