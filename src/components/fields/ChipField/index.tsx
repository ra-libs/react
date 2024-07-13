import { Chip, Typography } from '@mui/material'
import React from 'react'
import { ChipFieldProps as RAChipFieldProps, useRecordContext, useResourceDefinition, useTranslate } from 'react-admin'

export type ChipFieldProps = Omit<RAChipFieldProps, 'source'> & {
  source?: string
}

export function ChipField(props: ChipFieldProps) {
  const { className, source = 'id', emptyText } = props

  const record = useRecordContext()
  const translate = useTranslate()
  const { recordRepresentation } = useResourceDefinition()

  if (!record) return null

  let value = record?.[source]

  if (value == null && emptyText) {
    return (
      <Typography component='span' variant='body2' className={className}>
        {emptyText && translate(emptyText, { _: emptyText })}
      </Typography>
    )
  }

  if (typeof recordRepresentation === 'string') value = record[recordRepresentation]
  if (typeof recordRepresentation === 'function') value = recordRepresentation(record)
  if (React.isValidElement(recordRepresentation)) return recordRepresentation

  return <Chip label={value} sx={{ margin: '4px', cursor: 'inherit' }} />
}
