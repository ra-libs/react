import React from 'react'

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateInputProps, Labeled, useRecordContext, useResourceContext, useTranslate } from 'react-admin'
import { LabeledFieldProps } from '../../../config'
import { useDateLocale } from '../../../hooks/'

interface TimeFieldProps extends DateInputProps {}

export function TimeField(props: LabeledFieldProps<TimeFieldProps>) {
  const record = useRecordContext()
  const resource = useResourceContext()

  const translate = useTranslate()
  const { source, useLabel } = props

  const adapterLocale = useDateLocale()

  const value = record?.[source]
  const label = props.label ? props.label : translate(`resources.${resource}.fields.${source}`)

  const field = (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale}>
      <TimePicker label={label} value={value} readOnly onChange={() => {}} />
    </LocalizationProvider>
  )

  return useLabel ? <Labeled label={label}>{field}</Labeled> : <>{field}</>
}
