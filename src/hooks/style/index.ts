import { useMediaQuery as useMuiMediaQuery, Theme } from '@mui/material'

export function useMediaQuery() {
  const isXSmall = useMuiMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isSmall = useMuiMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return {
    isXSmall,
    isSmall,
  }
}
