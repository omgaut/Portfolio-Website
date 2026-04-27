interface Props {
  label: string;
  title: string;
}

const SectionHeader = ({ label, title }: Props) => (
  <div className="mb-14">
    <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
      / {label}
    </p>
    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
      {title}
    </h2>
  </div>
);

export default SectionHeader;