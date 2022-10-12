import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot'
import { clsx } from "clsx";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="py-4 px-3 flex items-center gap-3 h-12 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-500">
      {children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400  outline-none"
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
