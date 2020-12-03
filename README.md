# Design System Logcomex

The Logcomex design system - Ayla is an extension of some [Vuetify](https://vuetifyjs.com/) components
to create a new pattern based on the company specific needs. It is published as a package so
anyone can [try it](https://www.npmjs.com/package/@logcomex/design).

## Rodar o projeto localmente
- Rodar ```yarn link```, esse comando vai gerar um link local desse projeto.
- No projeto que você vai consumir esse pacote, rodar ```yarn link @logcomex/design```, isso vai linkar esse pacote como uma dependencia do seu projeto.
- Você pode executar o ```yarn build```, ou ```yarn watch``` se quiser que fique assistindo as suas alterações.
- Quando finalizar o uso da lib localmente, só rodar ```yarn unlink @logcomex/design``` pra deslinkar o DS do seu projeto.

 OBS: onde você importa essa lib, quando estiver usando o ```yarn watch```, é necessário comentar o import do css pra não dar erro.

## Mini doc de componentes

## LRouteChart

```
  <l-route-chart
    title="Informações de Origem e Destino"
    description="Rotas mais utilizadas para exportação no período pesquisado"
    :header=""
  />
```

### Parâmetros

header: Array com os titulos da listagem
```
['Porto de Origem', 'Porto de Descarga', 'Porto de Destino']
```

lines: Array de objetos com as linhas da listagem
```
[
  {
    number: '60%',
    quantity: {
      name: 'TEUS',
      value: 22
    },
    values: ['Santos', 'Norfolk', 'Port Everglades']
  },
  {
    number: '20%',
    values: ['Umuarama', 'Bosque Uirapuru', 'Porto do mané']
  },
  {
    number: '20%',
    isLast: true,
    values: 'Outros'
  }
]
```

## LTable

```
  <l-table
    :headers="[{ text: 'Dessert (100g serving)', value: 'name' }]
    :items="[{
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    }]
  />
```

### Parâmetros
headers e items são iguais ao da tabela do [Vuetify](https://vuetifyjs.com/en/components/data-tables/#data-tables) e está habilitado todos os atributos deles para serem utilizados, nosso componente esta fazendo um bind.


### Eventos
@ordination e @updateScroll estão disponiveis como nosso eventos personalizados


## LBarChart

```
<l-bar-chart
  :data="[{
    title: "Titulo",
    description: "Descrição",
    quantity: "100",
    total: "10.000",
    percentage: 50
  }]"
  color="#D4C5EB"
  description-class="text-right"
  hover-color="#F1E8FF"
  :translation="{"total":"Total","quantity":"Quantidade"}"
  loading="false"
  max-quantity="9"
/>
```
