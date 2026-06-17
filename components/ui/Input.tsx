import clsx from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="block text-sm text-white/90">
      {label && <span className="mb-2 block text-sm text-muted">{label}</span>}
      <input
        className={clsx(
          'w-full rounded-3xl border border-white/10 bg-[#08101f] px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20',
          className
        )}
        {...props}
      />
    </label>
  );
}
