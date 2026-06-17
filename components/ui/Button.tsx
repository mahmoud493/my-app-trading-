import clsx from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const styles = clsx(
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200',
    {
      'bg-accent text-surface shadow-lg shadow-accent/20 hover:bg-highlight': variant === 'primary',
      'border border-white/10 bg-[#0c1726] text-white hover:border-accent/50 hover:bg-white/5': variant === 'secondary',
      'text-white hover:text-accent': variant === 'ghost'
    },
    className
  );

  return <button className={styles} {...props} />;
}
