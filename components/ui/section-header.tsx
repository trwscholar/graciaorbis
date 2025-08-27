import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  centered = false, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'space-y-4',
      centered && 'text-center max-w-3xl mx-auto',
      className
    )}>
      {badge && (
        <div className={cn('inline-flex', centered && 'justify-center')}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-heading-body">{title}</h2>
      {description && (
        <p className="text-muted-secondary text-lg">{description}</p>
      )}
    </div>
  );
}