
import { clsx } from "clsx";
import * as CheckboxRedix from '@radix-ui/react-checkbox';
import {Check } from 'phosphor-react'
export interface CheckboxProps {
}
function Checkbox({ }: CheckboxProps) {
  return (
    <CheckboxRedix.Root className="w-6 h-6 p-[2px] rounded bg-gray-800">
      <CheckboxRedix.Indicator asChild>
        <Check className='h-5 w-5 text-cyan-500' weight="bold"/>
      </CheckboxRedix.Indicator>
    </CheckboxRedix.Root>

  );
}

export { Checkbox };
