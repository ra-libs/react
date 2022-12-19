import React from 'react'
import { Labeled, TextField, TextFieldProps } from 'react-admin'

export function LabeledTextField(props: TextFieldProps) {
  return (
    <Labeled>
      <TextField {...props} />
    </Labeled>
  )
}
