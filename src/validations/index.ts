export const minYear =
    (year: number, message = 'validation.minYear') =>
        (value: Date) => {
            return value.getFullYear() >= year ? undefined : { message, args: { year } };
        }

export const maxYear =
    (year: number, message = 'validation.maxYear') =>
        (value: Date) => {
            return value.getFullYear() <= year ? undefined : { message, args: { year } };
        }
