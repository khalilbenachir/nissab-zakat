import { Input } from "@/components/ui/input"
import { NumericFormat } from "react-number-format"
import { forwardRef } from "react"

interface NumberInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, ...props }) => {
    return (
      <NumericFormat
        customInput={Input}
        thousandSeparator=" "
        decimalScale={2}
        fixedDecimalScale
        value={value}
        onValueChange={(values) => {
          onChange(values.value)
        }}
        {...props}
      />
    )
  }
)

NumberInput.displayName = "NumberInput" 