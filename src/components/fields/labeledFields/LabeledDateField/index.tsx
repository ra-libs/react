import React from 'react'
import { DateFieldProps, Labeled, DateField } from 'react-admin'

export function LabeledDateField(props: DateFieldProps) {
  return (
    <Labeled>
      <DateField {...props} />
    </Labeled>
  )
}
