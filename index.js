import { createElement } from 'react'
import { wrapInput } from 'react-functional-forms'
import * as pickers from '@material-ui/pickers'
import dateUtils from '@date-io/dayjs'

const wrapPicker = component => wrapInput(
  props => createElement(
    pickers.MuiPickersUtilsProvider, {
      utils: dateUtils,
      children: createElement(component, props)
    }
  ),
  {
    valueFromEvent: value => value,
    defaultValue: new Date()
  }
)

export const DatePicker = wrapPicker(pickers.DatePicker)
export const TimePicker = wrapPicker(pickers.TimePicker)
export const DateTimePicker = wrapPicker(pickers.DateTimePicker)
