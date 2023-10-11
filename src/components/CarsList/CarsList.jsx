import { CarsListItem } from '../CarsListItem/CarsListItem';
import { Container, List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <Container>
      <List>
        {cars.map(car => (
          <CarsListItem key={car.id} {...car} />
        ))}
      </List>
    </Container>
  );
};
