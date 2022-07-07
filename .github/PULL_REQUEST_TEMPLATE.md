## :package: Conteúdo

- featureN

## :heavy_check_mark: Tarefa(s)

- LOG-XX

## :eyes: Tarefa de Code Review (CR)

- LOG-XX

## :warning: Tipo de alteração
<!-- marcar uma das opções com x -->

- [ ] Bug fix (não tem breaking change e resolve um bug) 
- [ ] Feature (não tem breaking change e adiciona nova(s) funcionalidade(s) ou componente(s)) 
- [ ] Breaking change (fix ou feature que faz com que uma funcionalidade já existente não funcione mais parcialmente ou totalmente)
- [ ] Melhoria/Refatoração (não tem breaking change, não adiciona nenhuma feature nova e nem corrige bug, no entanto, melhora a qualidade do código, documentação ou alguma outra coisa)
 
## :white_check_mark: Checklist
<!-- marcar com x o que se aplica, o que não se aplica manter vazio -->

- [ ] Minha alteração não inclui regras de negócio <!-- Obrigatório -->
- [ ] Meu código está de acordo com o [Vue Style Guide](https://v2.vuejs.org/v2/style-guide/?redirect=true) e o mais limpo possível <!-- Obrigatório -->
- [ ] Feature anotada na release note <!-- Obrigatório -->
- [ ] Testes de snapshot passaram/foram aprovados <!-- Obrigatório, aguardar pela action mergeability que roda após ter 3 approves e os outros checks já terem passado. Se o mergeability estiver com fail após ter os approves e as outras checks já terem passado é necessário dar rerun. -->
- [ ] Documentação atualizada <!-- Necessário apenas se alterou API de algum componente ou se criou um componente novo --> 
- [ ] Testes unitários atualizados <!-- Necessário apenas se alterou API de algum componente ou se criou um componente novo --> 
- [ ] Levantamento de componentes atualizado <!-- Necessário apenas se criou um componente novo -->


<!-- Links: https://logcomex.atlassian.net/wiki/spaces/ARQ/pages/24444950/Design+System -->

<!-- Após merge para homol, será gerada automaticamente uma versão beta que pode ser verificada no NPM e no resultado da action. Essa beta é a que você vai atualizar no seu produto caso não queira esperar a próxima versão estável do pacote -->
