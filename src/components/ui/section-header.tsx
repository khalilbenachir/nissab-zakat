interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2 mb-6 max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight text-balance text-center">
        {title}
      </h2>
      <p className="text-muted-foreground text-balance text-center">
        {subtitle}
      </p>
    </div>
  );
}
