import clsx from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx('rounded-[2rem] border border-white/10 bg-[#0a1220] shadow-surface', className)} {...props}>
      {children}
    </div>
  );
}
