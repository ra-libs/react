import React from 'react'
import { DateField as RaDateField, DateFieldProps, Labeled } from 'react-admin'

import { LabeledFieldProps } from '../../../config'

type TimeFieldProps = DateFieldProps

export function TimeField(props: LabeledFieldProps<TimeFieldProps>) {
  const { useLabel, ...rest } = props
  const field = (
    <RaDateField
      {...rest}
      showDate={false}
      showTime
      options={{
        hour: '2-digit',
        minute: '2-digit',
      }}
    />
  )
  return useLabel ? <Labeled>{field}</Labeled> : <>{field}</>
}
