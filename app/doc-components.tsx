/*
 * Clause numbers are the document's own reference marks, so they hang in the
 * margin beside the measure on wide screens and fall inline below 1120px.
 * `flag` marks a clause the source document itself asks you to read closely.
 */
export function Clause({
  no,
  title,
  flag = false,
  children,
}: {
  no: string;
  title: string;
  flag?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={flag ? "clause clause-flag" : "clause"}>
      <h2 className="clause-title">
        <span className="clause-no">{no}</span>
        {title}
      </h2>
      <div className="clause-body">{children}</div>
    </section>
  );
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="doc-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
