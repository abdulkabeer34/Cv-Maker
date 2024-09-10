import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

interface SectionProps {
  heading?: string;
  title?: string;
  sideText?: string;
  middleText?: string;
  endText?: string;
}

const styles = StyleSheet.create({
  section: {
    padding: '18pt',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12pt',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sideText: {
    color: '#64748b', 
  },
  middleText: {
    color: '#64748b',
    paddingTop: '8pt',
  },
  endText: {
    color: '#64748b',
    paddingTop: '8pt',
    wordBreak: 'break-word',
  },
});


export const SectionStyled: React.FC<SectionProps> = (props) => {

  return (
      <View style={styles.section}>
        {props.heading && (
          <Text style={styles.heading}>{props.heading ?? '---'}</Text>
        )}

        {(props.title || props.sideText) && (
          <View style={styles.titleContainer}>
            {props.title && (
              <Text style={styles.title}>{props.title ?? '---'}</Text>
            )}
            {props.sideText && (
              <Text style={styles.sideText}>{props.sideText ?? '---'}</Text>
            )}
          </View>
        )}

        {props.middleText && (
          <Text style={styles.middleText}>{props.middleText ?? '---'}</Text>
        )}

        {props.endText && (
          <Text style={styles.endText}>{props.endText ?? '---'}</Text>
        )}
      </View>
  );
};


