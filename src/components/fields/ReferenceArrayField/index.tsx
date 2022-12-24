import React from 'react'

import {
  Labeled,
  ReferenceArrayField as RaReferenceArrayField,
  ReferenceArrayFieldProps,
  SingleFieldList,
} from 'react-admin'
import { LabeledFieldProps } from '../../../config'
import { ChipField } from '../ChipField'

export function ReferenceArrayField(props: LabeledFieldProps<ReferenceArrayFieldProps>) {
  const { children, useLabel, ...rest } = props

  const field = (
    <RaReferenceArrayField {...rest}>
      {children ? (
        children
      ) : (
        <SingleFieldList>
          <ChipField />
        </SingleFieldList>
      )}
    </RaReferenceArrayField>
  )

  return useLabel ? <Labeled>{field}</Labeled> : <>{field}</>
}
