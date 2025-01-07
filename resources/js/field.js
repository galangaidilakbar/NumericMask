import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-numeric-mask', IndexField)
  app.component('detail-numeric-mask', DetailField)
  app.component('form-numeric-mask', FormField)
})
