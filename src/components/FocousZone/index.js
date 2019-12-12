import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const FocousZone = () => {
	return (
		<View style={styles.previewFocousZone}>
			<View style={styles.previewFocousZoneRowBlock}>
				<View style={styles.previewFocousZone1} />
				<View style={styles.previewFocousZone2} />
			</View>
			<View style={styles.previewFocousZoneRowBlock}>
				<View style={styles.previewFocousZone3} />
				<View style={styles.previewFocousZone4} />
			</View>
		</View>
	);
}

export default FocousZone;
