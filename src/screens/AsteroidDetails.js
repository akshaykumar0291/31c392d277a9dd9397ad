import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { getAsteroidDetails } from '../utils/Api';
import SpinnerView from '../component/SpinnerView';

const AsteroidDetails = (props) => {

  const {route} = props;
  const asteroidId = route.params.asteroidId;

  const [showSpinner, setShowSpinner] = useState(true);
  const [asteroidDetails, setAsteroidDetails] = useState(undefined);

  useEffect(() => {
    callAsteroidDetails();
  }, []);

  const callAsteroidDetails = async () => {
    const result = await getAsteroidDetails(asteroidId);
    setShowSpinner(false);
    setAsteroidDetails(result);
  }

  return(
    <View style = {styles.container}>
        {showSpinner ? <SpinnerView/> : null}
        {asteroidDetails ? (
          <View style={styles.item}>
            <Text style={styles.text}>Name: {asteroidDetails.name}</Text>
            <Text style={styles.text}>nasa_jpl_url: {asteroidDetails.nasa_jpl_url}</Text>
            <Text style={styles.text}> is_potentially_hazardous_asteroid: {asteroidDetails.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
          </View>
        ) : <Text >No Detail found</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
errorText : {
    fontSize: 20,
    fontWeight: 'bold'
},
item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
    padding: 15
},
text: {
    marginBottom : 5
}
});

export default AsteroidDetails;