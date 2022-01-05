export default function Statistics ({title, stats}){
    return (<section class="statistics">
    {title && <h2>{title}</h2>}
  
    <ul class="stat-list">
    
     {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
    
    </ul>
  </section>)

}