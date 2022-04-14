import colorsMixin from '~/mixins/colors.mixin'

const alertMixin = {
  mixins: [colorsMixin],
  methods: {
    getAlertFeedbackColor (type: string) {
      return this.globalColors[`feedback${type}`]
    },
    getAlertFeedbackLightColor (type: string) {
      return this.globalColors[`feedback${type}Light`]
    },
    getAlertIcon (type: string) {
      const options = {
        Error: 'mdi-alert-octagon',
        Informational: 'mdi-information',
        Success: 'mdi-check-circle',
        Warning: 'mdi-alert'
      }
      
      return options[type]
    }
  }
}

export default alertMixin
