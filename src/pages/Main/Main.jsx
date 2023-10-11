import { PageContainer, Title, AdvantageList, AdvantageItem, Strong } from './Main.styled';

function Main() {
  return (
    <PageContainer>
      <Title>
        Welcome to Rent-<Strong>A</Strong>-Car - Your Key to Freedom on Wheels
      </Title>
      <AdvantageList>
        <AdvantageItem>
          <Strong>Diverse Fleet:</Strong> Choose from our extensive fleet of well-maintained
          vehicles, from compact cars to spacious SUVs and luxury cars. We've got a ride for every
          adventure.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Competitive Rates:</Strong> Enjoy affordable rental rates that cater to every
          budget. With flexible pricing options, you can rest easy knowing you're getting the best
          deal in town.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Easy Booking:</Strong> Our user-friendly website makes it a breeze to reserve your
          car. It takes just a few clicks, and you're on your way to your dream ride.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Convenient Locations:</Strong> With rental offices strategically located in key
          cities and airports, you can easily pick up and drop off your car, saving you time and
          effort.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>24/7 Support:</Strong> Our dedicated customer support team is available round the
          clock to assist you with any queries or issues. We're here for you, day or night.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Transparent Policies:</Strong> We believe in clear and honest business practices.
          No hidden fees or surprises—just straightforward terms and conditions.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Safety & Maintenance:</Strong> Your safety is our priority. Our vehicles undergo
          regular maintenance and sanitization to ensure a worry-free journey.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Customized Packages:</Strong> Whether it's a weekend getaway, a long road trip, or
          a monthly rental, we offer packages tailored to your needs.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Loyalty Program:</Strong> Join our loyalty program and enjoy exclusive benefits,
          discounts, and rewards for being a valued Rent-A-Car customer.
        </AdvantageItem>
        <AdvantageItem>
          <Strong>Green Initiatives:</Strong> We're committed to reducing our carbon footprint.
          Explore our eco-friendly car options and contribute to a sustainable future.
        </AdvantageItem>
      </AdvantageList>
    </PageContainer>
  );
}

export default Main;
