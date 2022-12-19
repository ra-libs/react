import React from 'react'
import { SelectFieldProps, Labeled, SelectField } from 'react-admin'

export function LabeledSelectField(props: SelectFieldProps) {
  return (
    <Labeled>
      <SelectField {...props} />
    </Labeled>
  )
}
