import { Card, Image, List, Spin } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import countryContext from '../../context/country/countryContext';
const Index = () => {
  const { locations, locationImg, setPlaceImg } = useContext(countryContext);
  let history = useHistory();
  const handleOnClick = (query, index) => {
    history.push({
      pathname: '/location',
      search: `?coord=${query}`,
    });

    const img = locationImg && locationImg[index] ? locationImg[index].largeImageURL : null;
    setPlaceImg(img);
  };
  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 4,
        }}
        dataSource={locations.geonames}
        renderItem={(item, index) => (
          <List.Item>
            <Card title={locationImg[index] ? <Image onClick={() => handleOnClick(`${item.lat},${item.lng}`, index)} width={400} height={200} style={{ paddingTop: '10px' }} preview={false} src={locationImg[index].webformatURL} /> : <Spin />}>
              <p style={{ fontSize: '18px', textAlign: 'center', fontWeight: '700', padding: '0px' }}>{item.name}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Index;
