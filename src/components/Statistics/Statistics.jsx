import PropTypes from "prop-types";
import {Title, StatList,Statsection,Item} from "./Statistics.styled"
import getRandomHexColor from "./getRandomColor"

export default function Statistics ({title, stats}){
    return (<Statsection>
    {title && <Title>{title}</Title> }
  
    <StatList>    
     {stats.map(stat => (
          <Item key = {stat.id}
          style={{ backgroundColor: getRandomHexColor() }}>            
            <span>{stat.label}</span>
            <span>{stat.percentage} %</span>
          </Item>
        ))}
    
    </StatList>
  </Statsection>)
}
Statistics.prototype ={
  title: PropTypes.string,
  stats: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),

}