# Design System Logcomex

The Logcomex design system - Ayla is an extension of some [Vuetify](https://vuetifyjs.com/) components
to create a new pattern based on the company specific needs. It is published as a package so
anyone can [try it](https://www.npmjs.com/package/@logcomex/design).


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
