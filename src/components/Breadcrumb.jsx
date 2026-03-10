export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="breadcrumb" style={{marginBottom:12}}>
      <ol style={{display:'flex',gap:8,listStyle:'none',padding:0,margin:0,justifyContent:'center'}}>
        {items.map((it, idx) => (
          <li key={idx} style={{color:'#3d6b7a'}}>{it.href ? <a href={it.href}>{it.label}</a> : it.label}{idx < items.length - 1 ? ' ›' : ''}</li>
        ))}
      </ol>
    </nav>
  )
}
